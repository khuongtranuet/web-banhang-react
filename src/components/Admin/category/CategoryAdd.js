import React, {Component} from 'react';
import isEmpty from "validator/es/lib/isEmpty";
import CallAPI from "../../../utils/CallAPI";
import {Link} from "react-router-dom";

const initialState = {
    name: '',
    description: '',
    image: null,
    parentId: -1,
    status: 1,
};

class CategoryAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            image: null,
            parentId: -1,
            status: 1,
            data: [],
        };
    }

    validate = () => {
        let nameError = "";
        let descriptionError = "";
        let imageError = "";
        let statusError = "";
        let parentIdError = "";

        if (isEmpty(this.state.name)) {
            nameError = "Tên danh mục không được bỏ trống";
        }
        if (this.state.name > 255) {
            nameError = 'Tên danh mục không được dài quá 255 ký tự'
        }
        if (this.state.description > 1000) {
            descriptionError = 'Phần mô tả không được dài quá 1000 ký tự'
        }

        if (this.state.image !== null) {
            const fileExt = this.state.image.name.split('.');
            const trueExt = fileExt[fileExt.length - 1];
            const fileSize = this.state.image.size;

            if (trueExt === 'png' || trueExt === 'jpeg' || trueExt === 'jpg') {
                if (fileSize > 6000000) {
                    imageError = 'Tệp của bạn quá lớn!';
                }
            } else {
                imageError = 'Tệp không hợp lệ!';
            }
        }
        if (this.state.status != -1 && this.state.status != 1) {
            statusError = 'Hiển thị không hợp lệ';
        }
        if(this.state.parentId !== -1) {
            var a = 0;
            this.state.data.forEach((v) => {
                if (v.id === this.state.parentId) {
                    a = 1;
                }
            })
            if (a !== 1) {
                parentIdError = 'Danh mục này không tồn tại';
            }
        }

        if (nameError || descriptionError || imageError || statusError || parentIdError) {
            this.setState({descriptionError, nameError, imageError, statusError, parentIdError});
            return false;
        }

        return true;
    };

    handleSubmit = event => {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            const fd = new FormData();
            fd.append('name', this.state.name);
            fd.append('description', this.state.description);
            fd.append('image', this.state.image);
            fd.append('parent_id', this.state.parentId);
            fd.append('status', this.state.status);
            CallAPI('category/create_api', 'POST', fd).then((res) => {
                if (typeof res.data.status !== 200) {
                    this.setState(initialState);
                    this.props.history.push('/admin/category');
                }
                if(typeof res.data.nameError !== 'undefined'){
                    this.setState({nameError: res.data.nameError})
                } else {
                    this.setState({nameError: ''})
                }
                if(typeof res.data.descriptionError !== 'undefined'){
                    this.setState({descriptionError: res.data.descriptionError})
                } else {
                    this.setState({descriptionError: ''})
                }
                if(typeof res.data.imageError !== 'undefined'){
                    this.setState({imageError: res.data.imageError})
                } else {
                    this.setState({imageError: ''})
                }
            })
        }
    }

    handleNameChange = event => {
        this.setState({
            name: event.target.value
        })
    }
    handleDescriptionChange = event => {
        this.setState({
            description: event.target.value
        })
    }
    handleImageChange = event => {
        this.setState({
            image: event.target.files[0]
        })
    }
    handleParentIDChange = event => {
        this.setState({
            parentId: event.target.value
        })
    }
    handleStatusChange = event => {
        this.setState({
            status: event.target.value
        })

    }

    componentDidMount() {
        CallAPI('category/list_api', 'GET', null).then((res) => {
            this.setState({
                data: res.data
            })
        })
    }

    render() {
        return (
            <div>
                <h3>Thêm danh mục</h3>
                <form encType="for" onSubmit={this.handleSubmit} className="form-horizontal">
                    <div className="form-group">
                        <label className="control-label col-lg-2" htmlFor="name">Tên danh mục(*):</label>
                        <div className="col-lg-4">
                            <input
                                name="name"
                                className="form-control"
                                value={this.state.name}
                                onChange={this.handleNameChange}
                            />
                            <div style={{fontSize: 14, color: "red"}} id="error">
                                {this.state.nameError}
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-lg-2" htmlFor="description">Mô tả:</label>
                        <div className="col-lg-4">
                        <textarea id="description"
                                  value={this.state.description}
                                  className="form-control"
                                  name="description" cols={53} rows={5}
                                  onChange={this.handleDescriptionChange}/>
                        </div>
                        <div style={{fontSize: 14, color: "red"}} id="error">
                            {this.state.descriptionError}
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-lg-2" htmlFor="image">Ảnh danh mục:</label>
                        <div className="col-lg-3">
                            <input type="file" onChange={this.handleImageChange} id="image" name="image"
                                   className="form-control"/>
                            <div style={{fontSize: 14, color: "red"}} id="error">
                                {this.state.imageError}
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-lg-2" htmlFor="parent_id">Thuộc danh mục:</label>
                        <div className="col-lg-3">
                            <select className="form-control" onChange={this.handleParentIDChange}>
                                <option value={-1}>Danh mục gốc</option>
                                {
                                    this.state.data.map((p) => {
                                        return <option key={p.id} value={p.id}>{p.name}</option>
                                    })
                                }
                            </select>
                            <div style={{fontSize: 14, color: "red"}} id="error">
                                {this.state.parentIdError}
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-lg-2">Hiển thị:</label>
                        <div className="col-lg-3" style={{marginTop:7}}>
                            <div className="row">
                                <div className="col-lg-6">
                                    <input
                                        type="radio"
                                        value="1"
                                        name="status"
                                        className="radio-inline"
                                        checked={this.state.status === "1"}
                                        onChange={this.handleStatusChange}/>Có
                                </div>
                                <div className="col-lg-6">
                                    <input
                                        type="radio"
                                        value="-1"
                                        name="status"
                                        className="radio-inline"
                                        checked={this.state.status === "-1"}
                                        onChange={this.handleStatusChange}/>Không
                                </div>
                                <div className="col-lg-12">
                                    <div style={{fontSize: 14, color: "red"}} id="error">
                                        {this.state.statusError}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-lg-offset-2 col-lg-6">
                            <div className="row">
                                <div className="col-lg-6">
                                    <Link to="admin/category" className="btn btn-primary"
                                          style={{background: 'rebeccapurple'}}>Quay
                                        lại</Link>
                                </div>
                                <div className="col-lg-6">
                                    <button type="submit" className="btn btn-success">Thêm</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default CategoryAdd;