import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Nav from "../components/Nav";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Aboutkfc from "../components/Aboutkfc";
import Support from "../components/Support";
import Legal from "../components/Legal";
import Footer from "../components/Footer";

function About() {
  const style = {
    aboutContainer: "mt-[90px] px-8 text-[#502314] pb-[70px] lg:mt-[200px]",
    signin: "flex items-center gap-2",
    line: "w-full h-[1px] bg-[#502314] my-4",
    link: "flamesan hover:underline decoration-2"
  };

  return (
    <div>
      <Helmet>
        <title>About - Burger King</title>
      </Helmet>
      <Header />
      <div className={style.aboutContainer}>
        <div className={style.signin}>
          <AccountCircleIcon />
          <Link to="/signin">Sign in or Create Account</Link>
        </div>
        <div className={style.line}></div>
        <Aboutkfc />
        <div className={style.line}></div>
        <Support />
        <div className={style.line}></div>
        <Legal />
        <div className={style.line}></div>
        <Link className={style.link}>Royal Perks</Link>
        <div className={style.line}></div>
        <Link className={style.link}>Royal Perks Terms of Services</Link>
        <div className={style.line}></div>
      </div>
      <Footer />
      <Nav />
    </div>
  );
}

export default About;
