import React from "react";
import Logo from "../assets/imgs/burger.svg";
import { NavLink, Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CodeIcon from '@mui/icons-material/Code';

function Header() {
  const style = {
    headerContainer:
      "fixed top-0 left-0 w-full h-[73px] flex items-center justify-center bg-[#f5ebdc] z-10 lg:justify-between px-[30px]",
    logo: "  top-0 w-[45px] lg:w-[70px] z-2",
    nav: "hidden lg:flex items-center text-[18px]  gap-5",
  };

  return (
    <div className={style.headerContainer}>
      <nav className={style.nav}>
        <Link to="/about" className="lg:hidden">
          <MenuIcon />
        </Link>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/order">Order</NavLink>
        <NavLink to="/reorder">Page 404</NavLink>
        <NavLink to="/about">More</NavLink>
      </nav>
      <Link to="/" className="lg:mr-[150px]">
        <img src={Logo} alt="burger king logo" className={style.logo} />
      </Link>
      <a href="https://github.com/anondobhaii" target="_blank" className="text-[14px] p-[6px_24px] hidden lg:flex items-center text-[#f5ebdc] bg-[#502314] rounded-full cursor-pointer">
        <CodeIcon fontSize="small"/>
        <span className="ml-2">Repo</span>
      </a>
    </div>
  );
}

export default Header;
