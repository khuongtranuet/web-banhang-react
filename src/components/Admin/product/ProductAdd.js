import React, {Component} from 'react';
import CallAPI from "../../../utils/CallAPI";
import SelectSearch from 'react-select-search';
import '../../../assets/css/searchDropdown.css';

class ProductAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            price: 0,
            brandId: -1,
            categoryId: -1,
            description: '',
            attributeId: [],
            brand: [],
            category: [],
            EAV: []
        }
    }

    addEAV = () => {
        this.setState({
            EAV: [...this.state.EAV, {attributeId: '', value: ''}]
        })
    }

    removeEAV = (index) => {
        this.state.EAV.splice(index, 1)
        this.setState({
            EAV: this.state.EAV
        })
    }

    nameChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    priceChange = (e) => {
        this.setState({
            price: e.target.value
        })
    }

    brandChange = (e) => {
        this.setState({
            brandId: e.target.value
        })
    }

    categoryChange = (e) => {
        this.setState({
            categoryId: e.target.value
        })
    }

    attributeIdChange = (e, index) => {
        this.state.EAV[index].attributeId = e.target.value;
        this.setState({
            EAV: this.state.EAV
        })
    }

    valueChange(e, index) {
        this.state.EAV[index].value = e.target.value
        this.setState({
            EAV: this.state.EAV
        })
    }

    componentDidMount() {
        CallAPI('product/brand_list', 'GET').then((res) => {
            this.setState({
                brand: res.data
            })
        })
        CallAPI('product/category_list', 'GET').then((res) => {
            this.setState({
                category: res.data
            })
        })
        CallAPI('product/attribute_list', 'GET').then((res) => {
            this.setState({
                attributeId: res.data
            })
        })
    }

    render() {
        console.log(this.state.attributeId)
        console.log(this.state.EAV)
        return (
            <div>
                <h3>Thêm sản phẩm</h3>
                <form className="form-horizontal">
                    <div className="row">
                        <div className="form-group col-lg-6">
                            <label className="control-label col-lg-4" htmlFor="name">Tên sản phẩm(*):</label>
                            <div className="col-lg-8">
                                <input type="text" onChange={this.nameChange} className="form-control" id="name"
                                       name="name"/>
                            </div>
                        </div>
                        <div className="form-group col-lg-6">
                            <label className="control-label col-lg-4" htmlFor="brandId">Thương hiệu:</label>
                            <div className="col-lg-8">
                                <select
                                    className="form-control"
                                    name="brandId"
                                    id="brandId"
                                    onChange={this.brandChange}>
                                    <option value={-1}>Chọn thương hiệu</option>
                                    {
                                        this.state.brand.map((p) => {
                                            return <option value={p.id}>{p.name}</option>
                                        })
                                    }
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-lg-6">
                            <label className="control-label col-lg-4" htmlFor="price">Giá sản phẩm(*):</label>
                            <div className="col-lg-8">
                                <input type="number" onChange={this.priceChange} className="form-control" id="price" name="price"/>
                            </div>
                        </div>
                        <div className="form-group col-lg-6">
                            <label className="control-label col-lg-4" htmlFor="categoryId">Danh mục sản phẩm:</label>
                            <div className="col-lg-8">
                                <select className="form-control" name="categoryId" id="categoryId"
                                        onChange={this.categoryChange}>
                                    <option value={-1}>Chọn danh mục</option>
                                    {
                                        this.state.category.map((c) => {
                                            return <option value={c.id}>{c.name}</option>
                                        })
                                    }
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group">
                            <label className="control-label col-lg-2" htmlFor="name">Mô tả sản phẩm:</label>
                            <div className="col-lg-9">
                                <textarea style={{
                                    resize: 'vertical',
                                    border: '1px solid black',
                                    minHeight: '200px',
                                    width: '895px'
                                }} defaultValue={""}/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group">
                            <label className="control-label col-lg-2" htmlFor="name">Thông số sản phẩm:</label>
                            <div className="col-lg-9">
                                <div
                                    style={{
                                        border: '1px solid black',
                                        maxHeight: 220,
                                        minHeight: '100px',
                                        width: '895px',
                                        overflow: "auto"
                                    }}
                                    className="info">
                                    {
                                        this.state.EAV.map((attr, index) => {
                                            return (
                                                <div className="row" style={{paddingTop: 7}} key={index}>
                                                    <div className="col-lg-4 col-lg-offset-1">
                                                        <SelectSearch
                                                            options={this.state.attributeId}
                                                            name="attribute"
                                                            search="true"
                                                            onChange={(e) => this.attributeIdChange(e,index)}
                                                            placeholder="Thông số sản phẩm" />
                                                    </div>
                                                    <div className="col-lg-5">
                                                        <input
                                                            className="form-control"
                                                            name="value"
                                                            value={attr.value}
                                                            onChange={(e) => this.valueChange(e, index)}
                                                        />
                                                    </div>
                                                    <div className="col-lg-2">
                                                        <button
                                                            className="btn btn-primary remove_button"
                                                            id="minus"
                                                            type="button"
                                                            style={{
                                                                borderRadius: "15px",
                                                                borderColor: "#f44336",
                                                                backgroundColor: "#f44336",
                                                            }}
                                                            onClick={(e) => this.removeEAV(index)}
                                                        >
                                                            <i className="fa fa-minus"/>
                                                        </button>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                    <div style={{textAlign: "center"}}>
                                        <button
                                            className="btn btn-primary add_button"
                                            id="plus"
                                            type="button"
                                            style={{
                                                textAlign: "",
                                                borderRadius: "15px",
                                                marginTop: "20px",
                                                backgroundColor: "#4caf50",
                                                borderColor: "#4caf50",
                                            }}
                                            onClick={this.addEAV}
                                        >
                                            <i className="fa fa-plus"/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default ProductAdd;