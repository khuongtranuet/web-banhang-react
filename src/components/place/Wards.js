import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import CallAPI from "../../utils/CallAPI";

Wards.propTypes = {
  district: PropTypes.string.isRequired,
  onWardChange: PropTypes.func,
};

function Wards(props) {
  const [wardList, setWardList] = useState([]);
  const rowWards = [];

  useEffect(() => {
    const filter = { district_id: props.district };
    CallAPI("ward", "GET", null, filter).then((res) => {
      if (typeof res != "undefined") {
        setWardList(res.data.data);
      }
    });
  }, [props.district]);

  function handleWardChange(e) {
    if (props.onWardChange) {
      props.onWardChange(e.target.value);
    }
  }

  wardList.forEach((wards, index) => {
    rowWards.push(
      <option value={wards.id} key={wards.id}>
        {wards.name}
      </option>
    );
  });
  return (
    <div className="row">
      <div className="col-lg-4">
        <label className="control-label" htmlFor="ward">
          Xã/Phường/Thị trấn<span style={{ color: "red" }}>(*)</span>:
        </label>
      </div>
      <div className="col-lg-8" id="ajax_ward">
        <select
          className="form-control"
          name="ward"
          id="ward"
          value={props.ward}
          onChange={handleWardChange}
        >
          <option value={-1}>- Xã/Phường/Thị trấn -</option>
          {rowWards}
        </select>
      </div>
    </div>
  );
}

export default Wards;
