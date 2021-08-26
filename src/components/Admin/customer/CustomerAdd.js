import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CallAPI from "../../../utils/CallAPI";
// import querystring from "querystring";
import Alerts from "../../Alert/Alerts";
import { alertOn } from "../../../actions/index";

function CustomerAdd() {
  const forceUpdate = React.useState()[1].bind(null, {});
  const provincesList = useSelector((state) => state.provinces);
  const dispatch = useDispatch();

  const [addresses, setAddresses] = useState([
    {
      province: "-1",
      district: "-1",
      ward: "-1",
      address: "",
      type_address: "-1",
      status_address: "1",
      listdistrict: [],
      listward: [],
    },
  ]);
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("-1");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("-1");
  // const [districtList, setDistrictList] = useState([]);
  // const [wardList, setWardList] = useState([]);
  const rowProvinces = [];
  const rowDistricts = [];
  const rowWards = [];

  provincesList.forEach((provinces, index) => {
    rowProvinces.push(
      <option value={provinces.id} key={provinces.id}>
        {provinces.name}
      </option>
    );
  });
  // districtList.forEach((districts, index) => {
  //   rowDistricts.push(
  //     <option value={districts.id} key={districts.id}>
  //       {districts.name}
  //     </option>
  //   );
  // });

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    const data = {
      fullname: name,
      birthday: birthday,
      mobile: mobile,
      email: email,
      gender: gender,
      password: password,
      status: status,
    };
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });
    for (var i = 0; i < addresses.length; i++) {
      formData.append("province" + i, addresses[i].province);
      formData.append("district" + i, addresses[i].district);
      formData.append("ward" + i, addresses[i].ward);
      formData.append("address" + i, addresses[i].address);
      formData.append("type_address" + i, addresses[i].type_address);
      formData.append("status_address" + i, addresses[i].status_address);
    }
    formData.append("total_address", addresses.length);
    CallAPI("customer/index", "POST", formData, null).then((res) => {
      console.log(res);
      if (res.status === 201) {
        dispatch(alertOn());
      }
    });
  };
  function handleChangeAddress(index, e) {
    // console.log(index, e.target.value);
    if (e.target.name === "province") {
      CallAPI("district", "GET", null, { province_id: e.target.value }).then(
        (res) => {
          // console.log(res);
          if (typeof res != "undefined") {
            addresses[index].listdistrict = res.data.data;
            // check = index;
            console.log(addresses[index].listdistrict);
            // addresses.map((addresss, index) => {
            //   rowDistricts[index] = [];
            //   if (addresss.listdistrict !== "") {
            //     addresss.listdistrict.forEach((districts, i) => {
            //       rowDistricts[index].push(
            //         <option value={districts.id} key={districts.id}>
            //           {districts.name}
            //         </option>
            //       );
            //     });
            //   }
            //   console.log(index, rowDistricts[index]);
            // });
            forceUpdate();
          }
        }
      );
    }
    if (e.target.name === "district") {
      CallAPI("ward", "GET", null, { district_id: e.target.value }).then(
        (res) => {
          console.log(res);
          if (typeof res != "undefined") {
            addresses[index].listward = res.data.data;
            console.log(addresses[index].listward);
            // addresses.map((addresss, index) => {
            //   rowWards[index] = [];
            //   if (addresss.listward !== "") {
            //     addresss.listward.forEach((ward, i) => {
            //       rowWards[index].push(
            //         <option value={ward.id} key={ward.id}>
            //           {ward.name}
            //         </option>
            //       );
            //     });
            //   }
            //   console.log(index, rowWards[index]);
            // });
            forceUpdate();
          }
        }
      );
    }
    const values = [...addresses];
    values[index][e.target.name] = e.target.value;
    setAddresses(values);
  }

  function handleChangeName(e) {
    setName(e.target.value);
  }
  function handleChangeBirthday(e) {
    setBirthday(e.target.value);
  }
  function handleChangeMobile(e) {
    setMobile(e.target.value);
  }
  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }
  function handleChangeGender(e) {
    setGender(e.target.value);
  }
  function handleChangePassword(e) {
    setPassword(e.target.value);
  }
  function handleChangeStatus(e) {
    setStatus(e.target.value);
  }
  function addAddress() {
    setAddresses([
      ...addresses,
      {
        province: "-1",
        district: "-1",
        ward: "-1",
        address: "",
        type_address: "-1",
        status_address: "0",
        listdistrict: [],
        listward: [],
      },
    ]);
  }
  function removeAddress(index) {
    const values = [...addresses];
    values.splice(index, 1);
    setAddresses(values);
  }
  return (
    <div>
      <div className="col-lg-12">
        <Alerts content={"Thêm mới thành công"} type={"success"} />
      </div>
      <div className="col-lg-12">
        <h3>Thêm người dùng</h3>
      </div>
      <form className="form-horizontal">
        <div className="col-lg-12">
          <div className="col-lg-6 form-group">
            <div className="row">
              <div className="col-lg-4">
                <label className="control-label" htmlFor="fullname">
                  Tên người dùng<span style={{ color: "red" }}>(*)</span>:
                </label>
              </div>
              <div className="col-lg-8">
                <input
                  type="text"
                  className="form-control"
                  value={name}
                  onChange={handleChangeName}
                  id="fullname"
                  name="fullname"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6 form-group" style={{ marginLeft: "10px" }}>
            <div className="row">
              <div className="col-lg-4">
                <label className="control-label" htmlFor="birthday">
                  Ngày sinh:
                </label>
              </div>
              <div className="col-lg-8">
                <input
                  type="date"
                  className="form-control"
                  value={birthday}
                  onChange={handleChangeBirthday}
                  id="birthday"
                  name="birthday"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
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
                  className="form-control"
                  value={mobile}
                  onChange={handleChangeMobile}
                  id="mobile"
                  name="mobile"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6 form-group" style={{ marginLeft: "10px" }}>
            <div className="row">
              <div className="col-lg-4">
                <label className="control-label" htmlFor="email">
                  Email<span style={{ color: "red" }}>(*)</span>:
                </label>
              </div>
              <div className="col-lg-8">
                <input
                  type="text"
                  className="form-control"
                  value={email}
                  onChange={handleChangeEmail}
                  id="email"
                  name="email"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="col-lg-6 form-group">
            <div className="row">
              <div className="col-lg-4">
                <label className="control-label" htmlFor="gender">
                  Giới tính:
                </label>
              </div>
              <div className="col-lg-8">
                <select
                  className="form-control"
                  value={gender}
                  onChange={handleChangeGender}
                  name="gender"
                  id="gender"
                >
                  <option value={-1}>- Giới tính -</option>
                  <option value={1}>Nam</option>
                  <option value={0}>Nữ</option>
                  <option value={2}>Khác</option>
                </select>
              </div>
            </div>
          </div>
          <div className="col-lg-6 form-group" style={{ marginLeft: "10px" }}>
            <div className="row">
              <div className="col-lg-4">
                <label className="control-label" htmlFor="password">
                  Mật khẩu<span style={{ color: "red" }}>(*)</span>:
                </label>
              </div>
              <div className="col-lg-8">
                <input
                  type="text"
                  className="form-control"
                  value={password}
                  onChange={handleChangePassword}
                  id="password"
                  name="password"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="col-lg-6 form-group">
            <div className="row">
              <div className="col-lg-4">
                <label className="control-label" htmlFor="status">
                  Trạng thái<span style={{ color: "red" }}>(*)</span>:
                </label>
              </div>
              <div className="col-lg-8">
                <select
                  className="form-control"
                  value={status}
                  onChange={handleChangeStatus}
                  name="status"
                  id="status"
                >
                  <option value={-1}>- Trạng thái -</option>
                  <option value={0}>Chưa kích hoạt</option>
                  <option value={1}>Kích hoạt</option>
                  <option value={2}>Tạm khóa</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <h4>Thông tin địa chỉ:</h4>
        </div>
        {addresses.map((addresss, index) => {
          rowDistricts[index] = [];
          if (addresss.listdistrict !== "") {
            addresss.listdistrict.forEach((districts, i) => {
              rowDistricts[index].push(
                <option value={districts.id} key={districts.id}>
                  {districts.name}
                </option>
              );
            });
          }
          rowWards[index] = [];
          if (addresss.listward !== "") {
            addresss.listward.forEach((ward, i) => {
              rowWards[index].push(
                <option value={ward.id} key={ward.id}>
                  {ward.name}
                </option>
              );
            });
          }
          return (
            <div key={index}>
              <div className="col-lg-12">
                <div className="col-lg-6 form-group">
                  <div className="row">
                    <div className="col-lg-4">
                      <label className="control-label" htmlFor="province">
                        Tỉnh/Thành phố<span style={{ color: "red" }}>(*)</span>:
                      </label>
                    </div>
                    <div className="col-lg-8">
                      <select
                        className="form-control"
                        name="province"
                        id="province"
                        value={addresss.province}
                        onChange={(e) => handleChangeAddress(index, e)}
                      >
                        <option value={-1}>- Tỉnh/TP -</option>
                        {rowProvinces}
                      </select>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-6 form-group"
                  style={{ marginLeft: "10px" }}
                >
                  <div className="row">
                    <div className="col-lg-4">
                      <label className="control-label" htmlFor="district">
                        Quận/Huyện<span style={{ color: "red" }}>(*)</span>:
                      </label>
                    </div>
                    <div className="col-lg-8" id="ajax_district">
                      <select
                        className="form-control"
                        name="district"
                        id="district"
                        value={addresss.district}
                        onChange={(e) => handleChangeAddress(index, e)}
                      >
                        <option value={-1}>- Quận/Huyện -</option>
                        {rowDistricts[index]}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="col-lg-6 form-group">
                  <div className="row">
                    <div className="col-lg-4">
                      <label className="control-label" htmlFor="ward">
                        Xã/Phường/Thị trấn
                        <span style={{ color: "red" }}>(*)</span>:
                      </label>
                    </div>
                    <div className="col-lg-8" id="ajax_ward">
                      <select
                        className="form-control"
                        name="ward"
                        id="ward"
                        value={addresss.ward}
                        onChange={(e) => handleChangeAddress(index, e)}
                      >
                        <option value={-1}>- Xã/Phường/Thị trấn -</option>
                        {rowWards[index]}
                      </select>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-6 form-group"
                  style={{ marginLeft: "10px" }}
                >
                  <div className="row">
                    <div className="col-lg-4">
                      <label className="control-label" htmlFor="address">
                        Địa chỉ<span style={{ color: "red" }}>(*)</span>:
                      </label>
                    </div>
                    <div className="col-lg-8">
                      <input
                        type="text"
                        className="form-control"
                        id="address"
                        name="address"
                        value={addresss.address}
                        onChange={(e) => handleChangeAddress(index, e)}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="col-lg-6 form-group">
                  <div className="row">
                    <div className="col-lg-4">
                      <label className="control-label" htmlFor="type_address">
                        Loại địa chỉ<span style={{ color: "red" }}>(*)</span>:
                      </label>
                    </div>
                    <div className="col-lg-8">
                      <select
                        className="form-control"
                        value={addresss.type_address}
                        onChange={(e) => handleChangeAddress(index, e)}
                        name="type_address"
                        id="type_address"
                      >
                        <option value={-1}>- Loại địa chỉ -</option>
                        <option value={0}>Nhà riêng/Chung cư</option>
                        <option value={1}>Cơ quan/Công ty</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="col-lg-6 form-group">
                  <div className="row">
                    <div className="col-lg-4">
                      <label className="control-label" htmlFor="status_address">
                        Cài đặt địa chỉ<span style={{ color: "red" }}>(*)</span>
                        :
                      </label>
                    </div>
                    <div className="col-lg-8">
                      <select
                        className="form-control"
                        value={addresss.status_address}
                        onChange={(e) => handleChangeAddress(index, e)}
                        name="status_address"
                        id="status_address"
                      >
                        <option value={-1}>- Cài đặt -</option>
                        <option value={1}>Địa chỉ mặc định</option>
                        <option value={0}>Địa chỉ phụ</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-1">
                <a
                  href="#!"
                  type="button"
                  className="btn btn-primary remove_button"
                  id="minus"
                  style={{
                    borderRadius: "15px",
                    borderColor: "#f44336",
                    backgroundColor: "#f44336",
                  }}
                  onClick={() => removeAddress(index)}
                >
                  <i className="fa fa-minus" />
                </a>
              </div>
            </div>
          );
        })}

        <div className="col-lg-12">
          <a
            type="button"
            href="#!"
            className="btn btn-primary add_button"
            id="plus"
            style={{
              borderRadius: "15px",
              marginTop: "20px",
              backgroundColor: "#4caf50",
              borderColor: "#4caf50",
            }}
            onClick={(e) => addAddress(e)}
          >
            <i className="fa fa-plus" />
          </a>
        </div>
        <div className="col-lg-12">
          <div className="row">
            <div
              className="col-lg-12 col-sm-12 col-xs-12"
              style={{ textAlign: "center" }}
            >
              <button
                className="btn btn-primary"
                type="submit"
                name="submit"
                onClick={onSubmit}
              >
                Thêm
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CustomerAdd;
