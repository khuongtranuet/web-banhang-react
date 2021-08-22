import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Link } from "react-router-dom";

function Register() {
  const validationSchema = Yup.object().shape({
    fullname: Yup.string().required("Trường này không được để trống!"),
    mobile: Yup.string().required("Trường này không được để trống!"),
    email: Yup.string()
      .required("Chưa nhập Email!")
      .email("Email không hợp lệ!"),
    password: Yup.string()
      .required("Chưa nhập mật khẩu!")
      .min(6, "Mật khẩu phải có độ dài từ 6 ký tự!")
      .max(100, "Mật khẩu dài tối đa 100 ký tự!"),
    confirmPassword: Yup.string()
      .required("Chưa nhập lại mật khẩu!")
      .oneOf([Yup.ref("password"), null], "Mật khẩu không khớp!"),
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
        <h3>Tạo tài khoản</h3>
        <span></span>
        <Link to="/login">
          <p>Bạn đã có tài khoản?</p>
        </Link>
        <div className="form-group">
          <label>Họ và tên</label>
          <input
            name="fullname"
            type="text"
            {...register("fullname")}
            className={`form-control ${errors.fullname ? "is-invalid" : ""}`}
          />
          <div className="invalid-feedback">{errors.fullname?.message}</div>
        </div>

        <div className="form-group">
          <label>Số điện thoại</label>
          <input
            name="mobile"
            type="text"
            {...register("mobile")}
            className={`form-control ${errors.mobile ? "is-invalid" : ""}`}
          />
          <div className="invalid-feedback">{errors.mobile?.message}</div>
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            name="email"
            type="text"
            {...register("email")}
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
          />
          <div className="invalid-feedback">{errors.email?.message}</div>
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

        <div className="form-group">
          <label>Nhập lại mật khẩu</label>
          <input
            name="confirmPassword"
            type="password"
            {...register("confirmPassword")}
            className={`form-control ${
              errors.confirmPassword ? "is-invalid" : ""
            }`}
          />
          <div className="invalid-feedback">
            {errors.confirmPassword?.message}
          </div>
        </div>

        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Tạo tài khoản
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
