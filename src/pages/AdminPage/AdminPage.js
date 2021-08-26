import React, { useEffect } from "react";
import Dashboard from "../../components/Admin/Dashboard";
import { useDispatch } from "react-redux";
import CallAPI from "../../utils/CallAPI";
import { accFetchProvinces } from "../../actions/index";

function AdminPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    CallAPI("province", "GET", null, null).then((res) => {
      // console.log(res.data.data);
      if (typeof res != "undefined") {
        const action = accFetchProvinces(res.data.data);
        dispatch(action);
      }
    });
  }, [dispatch]);
  return (
    <div>
      <Dashboard />
    </div>
  );
}

export default AdminPage;
