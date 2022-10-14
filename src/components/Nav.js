import React from "react";
import { NavLink } from "react-router-dom";
import Home from "../assets/imgs/home.svg";
import Order from "../assets/imgs/order.svg";
import Reorder from "../assets/imgs/reorder.svg";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

function Nav() {
  const style = {
    navContainer: "header fixed bottom-0 left-0 w-full h-[50px] flex items-center justify-around bg-[#f5ebdc] z-1 border-t border-t-[#fff] text-[#502314] lg:hidden",
    navComp: "flex items-center flex-col text-[12px] flamesan",
    navIcon : "filter invert-[14%] sepia-[85%] saturate-[706%] hue-rotate-[337deg] brightness-[91%] contrast-[93%]"
  };

  return (
    <div className={style.navContainer}>
      <NavLink to="/" className={style.navComp} end>
        <img src={Order} alt="Order Icon" className={style.navIcon} />
        <span>Home</span>
      </NavLink>
      <NavLink to="/order" className={style.navComp} end>
        <img src={Order} alt="Order Icon" className={style.navIcon}/>
        <span>Order</span>
      </NavLink>
      <NavLink to="/reorder" className={style.navComp} end>
        <img src={Reorder} alt="Reorder Icon" className={style.navIcon}/>
        <span>Page 404</span>
      </NavLink>
      <NavLink to="/about" className={style.navComp} end>
        <MoreHorizIcon />
        <span>More</span>
      </NavLink>
    </div>
  );
}

export default Nav;
