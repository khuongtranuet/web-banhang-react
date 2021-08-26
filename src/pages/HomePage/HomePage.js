import React from "react";
import SliderRight from "../../components/Sliders/SliderRight";
import Sliders from "../../components/Sliders/Sliders";
// import { useDispatch } from "react-redux";
// import CallAPI from "../../utils/CallAPI";
// import { accFetchProvinces } from "../../actions/index";

function HomePage() {
  // const filmList = useSelector((state) => state.products);
  // const provincesList = useSelector((state) => state.provinces);

  // console.log("list: ", filmList);
  // console.log("list provinces: ", provincesList);

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   CallAPI("province", "GET", null, null).then((res) => {
  //     // console.log(res.data.data);
  //     if (typeof res != "undefined") {
  //       const action = accFetchProvinces(res.data.data);
  //       dispatch(action);
  //     }
  //   });
  // }, [dispatch]);

  return (
    <div className="container">
      <div className="row">
        <Sliders />
        <SliderRight />
        <h1 className="col-lg-12">Trang chủ</h1>
      </div>
    </div>
  );
}

export default HomePage;
