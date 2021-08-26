import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import CallAPI from "../../utils/CallAPI";
// import { useForm } from "react-hook-form";

Districts.propTypes = {
  province: PropTypes.string.isRequired,
  onDistrictChange: PropTypes.func,
};

function Districts(props) {
  // const { register, errors } = useForm();
  // const [district, setDistrict] = useState("-1");
  const [districtList, setDistrictList] = useState([]);
  const rowDistricts = [];
  useEffect(() => {
    const filter = { province_id: props.province };
    CallAPI("district", "GET", null, filter).then((res) => {
      if (typeof res != "undefined") {
        setDistrictList(res.data.data);
      }
    });
  }, [props.province]);

  function handleDistrictChange(e) {
    if (props.onDistrictChange) {
      props.onDistrictChange(e.target.value);
    }
  }

  districtList.forEach((districts, index) => {
    rowDistricts.push(
      <option value={districts.id} key={districts.id}>
        {districts.name}
      </option>
    );
  });
  return (
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
          value={props.district}
          onChange={handleDistrictChange}
          // ref={register({ min: 0 })}
        >
          <option value={-1}>- Quận/Huyện -</option>
          {rowDistricts}
        </select>
      </div>
    </div>
  );
}

export default Districts;
