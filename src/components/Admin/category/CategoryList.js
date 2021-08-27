import React, {Component} from 'react';
import Search from "../Search";
import {Link} from "react-router-dom";
import CallAPI from "../../../utils/CallAPI";
import Pagination from "./Pagination";

class CategoryList extends Component {
    constructor() {
        super();

        this.state = {
            exampleItems: [],
            pageOfItems: []
        };

        this.onChangePage = this.onChangePage.bind(this);
    }

    onChangePage(pageOfItems) {
        this.setState({pageOfItems: pageOfItems});
    }


    componentDidMount() {
        CallAPI('category/list_api', 'GET', null).then((res) => {
            this.setState({
                exampleItems: res.data
            })
        })
    }

    render() {
        return (
            <div>
                <h3>Danh sách danh mục</h3>

                <div style={{marginTop: "20px"}}>
                    <div className="row" style={{marginBottom: "5px"}}>
                        {/* Tìm kiếm theo từ khóa */}
                        <div className="col-lg-3 col-sm-3 col-xs-12">
                            <Search
                                searchKeyword={this.state.searchKeyword}
                                onSearchChange={this.handleSearchChange}
                            />
                        </div>
                        {/* Thêm mới */}
                        <div
                            className="col-lg-2 col-sm-2 col-xs-6"
                            style={{float: "right", textAlign: "right"}}
                        >
                            <Link to="/admin/category/add">
                                <button className="btn btn-primary">Thêm</button>
                            </Link>
                        </div>
                    </div>
                </div>

                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th className="text-center">STT</th>
                        <th className="text-center">Tên danh mục</th>
                        <th className="text-center">Mô tả</th>
                        <th className="text-center">Danh mục con</th>
                        <th className="text-center">Xử lý</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.pageOfItems.map((data, i) => (
                            <tr>
                                <td style={{textAlign: "center"}}>{++i}</td>
                                {data.name
                                    ? <td>{data.name}</td>
                                    : <td>Không có thông tin</td>
                                }
                                {data.description
                                    ? <td>{data.description}</td>
                                    : <td>Không có thông tin</td>
                                }
                                {data.parent_name
                                    ? <td>{data.parent_name}</td>
                                    : <td>Danh mục gốc</td>
                                }

                                <td className="text-center " style={{width: "110px"}}>
                                    <a href="/#" title="Nhấn để xem chi tiết">
                                        <i className="fa fa-eye"/>
                                    </a>
                                    &nbsp; &nbsp;
                                    <a href="/#" title="Nhấn để chỉnh sửa">
                                        <i className="fa fa-pencil-square"/>
                                    </a>
                                    &nbsp; &nbsp;
                                    <a href="/#" title="Nhấn để xóa" style={{color: "red"}}>
                                        <i className="fa fa-trash"/>
                                    </a>
                                    &nbsp;
                                </td>
                            </tr>

                        ))
                    }
                    </tbody>
                </table>
                <div style={{textAlign: 'center'}}>
                    <Pagination items={this.state.exampleItems} onChangePage={this.onChangePage}/>
                </div>
            </div>
        );
    }
}

export default CategoryList;