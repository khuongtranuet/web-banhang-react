import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import Districts from "../../place/Districts";
import Wards from "../../place/Wards";
import CallAPI from "../../../utils/CallAPI";
import querystring from "querystring";
import Alerts from "../../Alert/Alerts";
import { alertOn } from "../../../actions/index";

function RepositoryAdd() {
  const provincesList = useSelector((state) => state.provinces);
  const dispatch = useDispatch();

  const [province, setProvince] = useState("-1");
  const [district, setDistrict] = useState("-1");
  const [ward, setWard] = useState("-1");

  const rowProvinces = [];
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Trường này không được để trống!"),
    mobile: Yup.string()
      .required("Trường này không được để trống!")
      .matches(phoneRegExp, "Số điện thoại không hợp lệ!"),
    address: Yup.string().required("Trường này không được để trống!"),
    province: Yup.number().moreThan(-1, "Trường này không được để trống!"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(validationSchema),
  });
  // const districtt = register("district");
  // setValue("district", "-1");
  const onSubmit = (data) => {
    // const formData = new FormData();
    const array = {};
    array["district"] = district;
    array["ward"] = ward;
    data = Object.assign(data, array);
    // Object.keys(data).forEach((key) => {
    //   formData.append(key, data[key]);
    // });
    // console.log("queystring: ", querystring.stringify(data));
    CallAPI("repository/index", "POST", querystring.stringify(data), null).then(
      (res) => {
        console.log(res);
        // if (typeof res != "undefined") {
        // }

        if (res.status === 201) {
          dispatch(alertOn());
          // history.goBack();
        }
      }
    );
    reset();
    setProvince("-1");
    setDistrict("-1");
    setWard("-1");
  };

  function handleProvinceChange(e) {
    setProvince(e.target.value);
    setDistrict("-1");
    setWard("-1");
  }
  function handleDistrictChange(newDistrict) {
    setDistrict(newDistrict);
    setWard("-1");
  }
  function handleWardChange(newWard) {
    setWard(newWard);
  }

  provincesList.forEach((provinces, index) => {
    rowProvinces.push(
      <option value={provinces.id} key={provinces.id}>
        {provinces.name}
      </option>
    );
  });
  return (
    <div>
      <div className="col-lg-12">
        <Alerts content={"Thêm mới thành công"} type={"success"} />
      </div>
      <div className="col-lg-12" style={{ textAlign: "center" }}>
        <h3>Thêm mới kho hàng</h3>
      </div>
      <form className="form-horizontal" onSubmit={handleSubmit(onSubmit)}>
        <div className="col-lg-12">
          <div className="col-lg-3" />
          <div className="col-lg-6 form-group">
            <div className="row">
              <div className="col-lg-4">
                <label className="control-label" htmlFor="name">
                  Tên kho hàng<span style={{ color: "red" }}>(*)</span>:
                </label>
              </div>
              <div className="col-lg-8">
                <input
                  type="text"
                  id="name"
                  name="name"
                  {...register("name")}
                  className={`form-control ${errors.name ? "is-invalid" : ""}`}
                />
                <div className="invalid-feedback">{errors.name?.message}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="col-lg-3" />
          <div className="col-lg-6 form-group">
            <div className="row">
              <div className="col-lg-4">
                <label className="control-label" htmlFor="mobile">
                  Số điện thoại<span style={{ color: "red" }}>(*)</span>:
                </label>
              </div>
              <div className="col-lg-8">
                <input
                  type="text"
                  id="mobile"
                  name="mobile"
                  {...register("mobile")}
                  className={`form-control ${
                    errors.mobile ? "is-invalid" : ""
                  }`}
                />
                <div className="invalid-feedback">{errors.mobile?.message}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="col-lg-3" />
          <div className="col-lg-6 form-group">
            <div className="row">
              <div className="col-lg-4">
                <label className="control-label" htmlFor="mobile">
                  Tỉnh/Thành phố<span style={{ color: "red" }}>(*)</span>:
                </label>
              </div>
              <div className="col-lg-8">
                <select
                  {...register("province")}
                  className={`form-control ${
                    errors.province ? "is-invalid" : ""
                  }`}
                  name="province"
                  id="province"
                  value={province}
                  onChange={handleProvinceChange}
                >
                  <option value={-1}>- Tỉnh/TP -</option>
                  {rowProvinces}
                </select>
                <div className="invalid-feedback">
                  {errors.province?.message}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="col-lg-3" />
          <div className="col-lg-6 form-group">
            <Districts
              province={province}
              onDistrictChange={handleDistrictChange}
              district={district}
            />
          </div>
        </div>
        <div className="col-lg-12">
          <div className="col-lg-3" />
          <div className="col-lg-6 form-group">
            <Wards
              ward={ward}
              onWardChange={handleWardChange}
              district={district}
            />
          </div>
        </div>
        <div className="col-lg-12">
          <div className="col-lg-3" />
          <div className="col-lg-6 form-group">
            <div className="row">
              <div className="col-lg-4">
                <label className="control-label" htmlFor="address">
                  Địa chỉ<span style={{ color: "red" }}>(*)</span>:
                </label>
              </div>
              <div className="col-lg-8">
                <input
                  type="text"
                  id="address"
                  name="address"
                  {...register("address")}
                  className={`form-control ${
                    errors.address ? "is-invalid" : ""
                  }`}
                />
                <div className="invalid-feedback">
                  {errors.address?.message}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="row">
            <div
              className="col-lg-12 col-sm-12 col-xs-12"
              style={{ textAlign: "center" }}
            >
              <button className="btn btn-primary" type="submit">
                Thêm
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default RepositoryAdd;
