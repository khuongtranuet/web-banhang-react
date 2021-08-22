import React, {Component} from 'react';
import Search from "../Search";
import {Link} from "react-router-dom";

class CategoryList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchKeyword: "",
        };
    }

    render() {
        return (
            <div>
                <h3 className="col-lg-12 col-sm-12">Danh sách danh mục</h3>
                <div className="col-lg-12 col-sm-12" style={{ marginTop: "20px" }}>
                    <div className="row" style={{ marginBottom: "5px" }}>
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
                            style={{ float: "right", textAlign: "right" }}
                        >
                            <Link to="/admin/category/add">
                                <button className="btn btn-primary">Thêm</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CategoryList;