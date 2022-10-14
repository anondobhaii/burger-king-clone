import React from "react";
import Playstore from "../assets/imgs/playstore.svg";
import Apple from "../assets/imgs/apple.svg";

function Burgerapp() {
  const style = {
    burgerappContainer:
      "px-6 flex flex-col items-center justify-content text-center bg-[#efe1cc] leading-[38px] md:flex-row md:text-left relative",
    heading:
      "text-[32px] md:text-[56px] md:leading-[52px] text-[#502314] my-12",
    playstore: "",
    para: "text-[12px] md:text-[13px] text-[#502314] leading-[16px] my-8 flamesan",
  };

  return (
    <div className={style.burgerappContainer}>
      <div className="flex-[2]"></div>
      <div className="flex-1 ">
        <h2 className={style.heading}>
          Save $$$
          <br />
          With offers on demand
        </h2>
        <div className="flex flex-row max-w-fit mx-auto lg:mx-0">
          <a href="https://play.google.com/store/apps/details?id=com.emn8.mobilem8.nativeapp.bk&hl=en_US&_branch_match_id=637034673462646357">
            <img src={Playstore} alt="" className={style.playstore} />
          </a>
          <a href="https://apps.apple.com/us/app/burger-king-app/id638323895">
            <img src={Apple} alt="" className={style.playstore} />
          </a>
        </div>
        <p className={style.para}>
          Apple and the Apple logo are trademarks of Apple Inc., registered in
          the U.S. and other countries. App Store is a service mark of Apple
          Inc. Google Play is a trademark of Google Inc. Terms apply.
        </p>
      </div>
      <img
        src="https://cdn.sanity.io/images/czqk28jt/prod_bk_us/57382e9feb53d08237fa988a570efdff1602d6ff-912x1267.png?w=750&q=40&fit=max&auto=format"
        alt=""
        className=" md:w-[480px] md:absolute md:left-[10%]"
      />
    </div>
  );
}

export default Burgerapp;
