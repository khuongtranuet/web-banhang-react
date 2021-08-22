import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Link } from "react-router-dom";

function Login() {
  const validationSchema = Yup.object().shape({
    mobile: Yup.string().required("Chưa nhập thông tin đăng nhập!"),
    password: Yup.string()
      .required("Chưa nhập mật khẩu!")
      .max(100, "Mật khẩu dài tối đa 100 ký tự!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    console.log(JSON.stringify(data, null, 2));
  };

  return (
    <div className="register-form">
      <form onSubmit={handleSubmit(onSubmit)} className="register">
        <h3>Đăng nhập</h3>
        <span></span>
        <p>
          Bạn chưa phải thành viên ?<Link to="/register">Đăng ký ngay</Link>
        </p>
        <div className="form-group">
          <label>Email/Số điện thoại</label>
          <input
            name="mobile"
            type="text"
            {...register("mobile")}
            className={`form-control ${errors.mobile ? "is-invalid" : ""}`}
          />
          <div className="invalid-feedback">{errors.mobile?.message}</div>
        </div>

        <div className="form-group">
          <label>Mật khẩu</label>
          <input
            name="password"
            type="password"
            {...register("password")}
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
          />
          <div className="invalid-feedback">{errors.password?.message}</div>
        </div>
        <div className="form-group form-check">
          <div className="row">
            <div className="col-lg-1">
              <input
                name="remember"
                type="checkbox"
                {...register("remember")}
                className={"form-check-input"}
              />
            </div>
            <div className="col-lg-11" style={{ paddingTop: "15px" }}>
              <label htmlFor="remember">Ghi nhớ đăng nhập</label>
            </div>
          </div>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Đăng nhập
          </button>
        </div>
        <Link to="/forgot">
          <p>Quên mật khẩu?</p>
        </Link>
      </form>
    </div>
  );
}

export default Login;
