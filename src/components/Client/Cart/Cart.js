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
            <div className="total-provisional">
              <span className="">Tạm tính (0 sản phẩm):</span>
              <soan className="position-right">đ</soan>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
