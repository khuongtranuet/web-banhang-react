import React from "react";
import { Link } from "react-router-dom";

function Cart() {
  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="cart">
          <div className="col-lg-12">
            <Link to="/" style={{ float: "left" }}>
              <i className="fa fa-chevron-left"></i> Mua thêm sản phẩm khác
            </Link>
            <span className="position-right">Giỏ hàng của bạn</span>
          </div>
          <div className="col-lg-12" style={{ backgroundColor: "white" }}>
            <div className="product-item"></div>
            <div className="total-provisional row">
              <div className="col-lg-12">
                <span>Tạm tính (0 sản phẩm):</span>
                <span className="position-right">đ</span>
              </div>
            </div>
            <div className="row">
              <p style={{ height: "1px", backgroundColor: "#cccccc" }}></p>
            </div>
            <div className="row">
              <span className="col-lg-12">THÔNG TIN KHÁCH HÀNG:</span>
              <div className="col-lg-12">
                <div className="row setting-cart">
                  <div className="col-lg-4">
                    <div className="row">
                      <div className="col-lg-6">
                        <label className="radio-inline">
                          <input
                            type="radio"
                            name="gender_customer"
                            defaultValue={1}
                          />
                          Anh
                        </label>
                      </div>
                      <div className="col-lg-6">
                        <label className="radio-inline">
                          <input
                            type="radio"
                            name="gender_customer"
                            defaultValue={0}
                          />
                          Chị
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="row  cart-info">
                  <div className="col-lg-6">
                    <input
                      type="text"
                      id="fullname"
                      name="fullname"
                      className="form-control"
                      placeholder="Họ và tên"
                    />
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      id="mobile"
                      name="mobile"
                      className="form-control"
                      placeholder="Số điện thoại"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-12 setting-cart">
                <div
                  className="col-lg-12"
                  style={{ backgroundColor: "#f6f6f6" }}
                >
                  <div className="row">
                    <div className="col-lg-12 setting-cart">
                      CHỌN ĐỊA CHỈ VÀ THỜI GIAN NHẬN HÀNG:
                    </div>
                    <div className="col-lg-12">
                      <div className="row setting-cart">
                        <div className="col-lg-6">
                          <select
                            className="form-control"
                            name="province"
                            id="province"
                            // value={addresss.province}
                          >
                            <option value={-1}>- Tỉnh/TP -</option>
                          </select>
                        </div>
                        <div className="col-lg-6">
                          <select
                            className="form-control"
                            name="district"
                            id="district"
                            // value={addresss.district}
                          >
                            <option value={-1}>- Quận/Huyện -</option>
                          </select>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6">
                          <select
                            className="form-control"
                            name="ward"
                            id="ward"
                            // value={addresss.ward}
                          >
                            <option value={-1}>- Phường/Xã -</option>
                          </select>
                        </div>
                        <div className="col-lg-6">
                          <input
                            type="text"
                            id="address"
                            name="address"
                            className="form-control"
                            placeholder="Số nhà, tên đường"
                          />
                        </div>
                      </div>
                      <div className="row setting-cart">
                        <div className="col-lg-12">
                          <div
                            className="col-lg-12 setting-cart"
                            style={{
                              backgroundColor: "white",
                              marginBottom: "20px",
                            }}
                          >
                            <span>Giao trước 10h hôm nay (27/08)</span>
                            <span className="position-right">
                              Chọn ngày giờ khác
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <input
                  type="text"
                  id="note"
                  name="note"
                  className="form-control"
                  placeholder="Yêu cầu khác (không bắt buộc)"
                />
              </div>
              <div className="col-lg-12 setting-cart">
                <div className="row">
                  <p style={{ height: "1px", backgroundColor: "#cccccc" }}></p>
                </div>
                <div className="row">
                  <div className="col-lg-5">
                    <div className="col-lg-12 discount-cart">
                      <i className="fa fa-percent"></i>
                      <span> Dùng mã giảm giá </span>
                      <span className="caret"></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 setting-cart">
                <div className="row">
                  <p style={{ height: "1px", backgroundColor: "#cccccc" }}></p>
                </div>
                <strong>Tổng tiền:</strong>
                <strong className="position-right" style={{ color: "#f30c28" }}>
                  đ
                </strong>
              </div>
              <div className="col-lg-12">
                <button className="btn btn-primary button-cart">
                  ĐẶT HÀNG
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
