import React, {Component} from 'react';

class CategoryUpdate extends Component {
    render() {
        return (
            <div>
                <h3>Cập nhật danh mục</h3>
                <form className="form-horizontal" action method="POST" encType="multipart/form-data">
                    <div className="form-group">
                        <label className="control-label col-lg-2" htmlFor="name">Tên danh mục(*):</label>
                        <div className="col-lg-4">
                            <input type="text" className="form-control" id="name" name="name" defaultValue />
                            <span className="errors" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-lg-2" htmlFor="description">Mô tả:</label>
                        <div className="col-lg-10">
                            <textarea id="description" name="description" cols={53} rows={5} defaultValue={""} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-lg-2" htmlFor="image">Ảnh danh mục:</label>
                        <div className="col-lg-3">
                            <input type="file" id="image" name="image" className="form-control" />
                            <span className="errors" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-lg-2" htmlFor="parent_id">Thuộc danh mục:</label>
                        <div className="col-lg-3">
                            <select className="form-control" id="parent_id" name="parent_id">
                                <option value={-1 }>Danh mục gốc</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-lg-2">Hiển thị:</label>
                        <div className="col-lg-3">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="radio">
                                        <label><input type="radio" defaultValue={1} name="status" />Có</label>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="radio">
                                        <label><input type="radio" defaultValue={-1} name="status" />Không</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-lg-offset-2 col-lg-6">
                            <div className="row">
                                <div className="col-lg-6">
                                    <a href="<?php echo base_url('admin/category/index') ?>" className="btn btn-primary" style={{background: 'rebeccapurple'}}>Quay lại</a>
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

export default CategoryUpdate;