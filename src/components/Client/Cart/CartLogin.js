import React from "react";
import iphone from "../../../images/iphone-12-den-200x200.jpg";

function CartLogin() {
  const i = 1;
  return (
    <div className="row">
      <div className="col-lg-12">
        <h4 className="title-cart">GIỎ HÀNG</h4>
      </div>
      <div className="col-lg-12">
        <div className="row">
          <div className="col-lg-9">
            <div className="col-lg-12" style={{ backgroundColor: "white" }}>
              <div className="row product-v2-heading">
                <div className="col-lg-5">
                  <input
                    type="checkbox"
                    id="allproduct"
                    name="allproduct"
                    value={-1}
                    style={{ marginTop: "3px", paddingTop: "3px" }}
                  />
                  <span> Tất cả ({i} sản phẩm)</span>
                </div>
                <div className="col-lg-2">
                  <span>Đơn giá</span>
                </div>
                <div className="col-lg-2">
                  <span>Số lượng</span>
                </div>
                <div className="col-lg-2">
                  <span>Thành tiền</span>
                </div>
                <div className="col-lg-1">
                  <a href="#!">
                    <i className="fa fa-trash-o"></i>
                  </a>
                </div>
              </div>
              <div className="row">
                <p style={{ height: "10px", backgroundColor: "#f5f5f5" }}></p>
              </div>
              <div className="row product-v2-heading">
                <div className="col-lg-5">
                  <div className="row">
                    <div className="col-lg-5">
                      <input
                        type="checkbox"
                        id="allproduct"
                        name="allproduct"
                        value={-1}
                        style={{ marginTop: "3px", paddingTop: "3px" }}
                      />
                      <img
                        src={iphone}
                        style={{ height: "78px", width: "78px" }}
                        alt="iphone 12"
                      />
                    </div>
                    <div
                      className="col-lg-7"
                      //   style={{ marginLeft: "-30px", width: "100% + 30px" }}
                    >
                      <div className="row">
                        <strong>Điện thoại Iphone 12 128GB</strong>
                      </div>
                      <div className="row">
                        <a href="#!">
                          Màu: Đen <span className="caret"></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2">
                  <strong>25.000.000đ</strong>
                </div>
                <div className="col-lg-2">
                  <button className="quatity-cart">-</button>
                  <input
                    type="tel"
                    id="quantity"
                    name="quantity"
                    value={1}
                    className="quatity-cart"
                  />
                  <button className="quatity-cart">+</button>
                </div>
                <div className="col-lg-2">
                  <strong style={{ color: "#ff424e" }}>25.000.000đ</strong>
                </div>
                <div className="col-lg-1">
                  <a href="#!">
                    <i className="fa fa-trash-o"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="col-lg-12" style={{ backgroundColor: "white" }}>
              <div className="row product-v2-heading">
                <div className="col-lg-12">
                  <strong>Giao tới</strong>
                  <a href="#!" className="position-right">
                    Thay đổi
                  </a>
                </div>
                <div className="col-lg-12 product-v2-heading">
                  <strong>Trần Minh Khương</strong>
                  <strong className="position-right">0385700554</strong>
                </div>
                <div className="col-lg-12 product-v2-heading">
                  <span>
                    100, Đường A, Phường Mỹ Đình 2, Quận Nam Từ Liêm, Hà Nội
                  </span>
                </div>
              </div>
              <div className="row">
                <p style={{ height: "10px", backgroundColor: "#f5f5f5" }}></p>
              </div>
              <div className="row product-v2-heading">
                <div className="col-lg-12" style={{ textAlign: "center" }}>
                  <a href="#!">
                    <i className="fa fa-percent"></i>
                    <span> Dùng mã giảm giá </span>
                    <span className="caret"></span>
                  </a>
                </div>
              </div>
              <div className="row">
                <p style={{ height: "10px", backgroundColor: "#f5f5f5" }}></p>
              </div>
              <div className="row product-v2-heading">
                <div className="col-lg-12">
                  <span>Tạm tính</span>
                  <span className="position-right">25.000.000đ</span>
                </div>
                <div className="col-lg-12">
                  <span>Giảm giá</span>
                  <span className="position-right">0đ</span>
                </div>
                <div className="col-lg-12">
                  <span>VAT</span>
                  <span className="position-right">0đ</span>
                </div>
                <div className="col-lg-12">
                  <div className="row product-v2-heading">
                    <p
                      style={{ height: "1px", backgroundColor: "#cccccc" }}
                    ></p>
                  </div>
                </div>
                <div className="col-lg-12">
                  <span>Tổng cộng</span>
                  <strong
                    className="position-right"
                    style={{ color: "#ff424e" }}
                  >
                    25.000.000đ
                  </strong>
                </div>
              </div>
            </div>
            <button className="btn btn-primary button-cart">Mua hàng</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartLogin;
