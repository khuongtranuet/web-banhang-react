import React from "react";
import { Link } from "react-router-dom";

function CartEmpty() {
  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="cartempty">
          <div className="col-lg-12">
            <i className="fa fa-cart-plus img-cartempty"></i>
          </div>
          <div className="col-lg-12">
            <p className="mess-cartempty">
              Không có sản phẩm nào trong giỏ hàng
            </p>
          </div>
          <div className="border-backhome btn col-lg-12">
            <Link className="backhome" to="/">
              Về trang chủ
            </Link>
          </div>
          <div className="col-lg-12">
            <p className="mess-cartempty">
              Khi cần trợ giúp vui lòng gọi <a href="#!">9999.9999</a> hoặc{" "}
              <a href="#!">0999.999.999</a> (7h30 - 22h)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartEmpty;
