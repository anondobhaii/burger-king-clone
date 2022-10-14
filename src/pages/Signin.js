import React from "react";
import { Helmet } from "react-helmet";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Link } from "react-router-dom";
import Logo from "../assets/imgs/burger.svg";
import { TextField } from "@mui/material";
import bg from '../assets/imgs/signbg.jpg' 

function Signin() {
  const style = {
    wrapper: "lg:flex",
    img: "hidden lg:flex lg:flex-1 lg:h-full ",    
    signinContainer: "lg:h-screen flex lg:flex-1 flex-col items-center justify-center px-4",
    back: "w-full py-4 lg:hidden",
    logo: "w-[80px] pt-[24px] pb-[26px]",
    formcontainer:
      "w-full bg-white rounded-2xl overflow-hidden max-w-[400px] text-[#502314]",
    formhead: "flamesan flex items-center justify-around border-b",
    formbody: "p-5 py-10 flex flex-col items-center jusitify-center space-y-6",
    button:
      "w-full text-[20px] py-3 text-[#ffffff] bg-[#d62300] rounded-full ",
  };

  return (
    <div className={style.wrapper}>
        <div className={style.img}>
            <img src={bg} alt="" className="h-screen w-full object-cover"/>
        </div>
      <div className={style.signinContainer}>
        <Helmet>
          <title>Sign In - Burger King</title>
        </Helmet>
        <Link to="/" className={style.back}>
          <KeyboardBackspaceIcon />
        </Link>
        <Link to="/">
          <img src={Logo} alt="burger logo" className={style.logo} />
        </Link>
        <form className={style.formcontainer}>
          <div className={style.formhead}>
            <Link to="/signup" className="py-4 w-full text-center">Sign Up</Link>
            <Link className="py-4 w-full border-b-2 border-b-[#d62300] text-center" onClick={(e)=>e.preventDefault}>
              Sign In
            </Link>
          </div>
          <div className={style.formbody}>
            <TextField
              fullWidth
              label="Email Address*"
              id="fullWidth"
              size="small"
              InputLabelProps={{
                style: { color: "#502314" },
              }}
            />
            <TextField
              fullWidth
              label="Password*"
              type="password"
              id="fullWidth"
              size="small"
              InputLabelProps={{
                style: { color: "#502314" },
              }}
            />
            <button className={style.button} onClick={(e)=>e.preventDefault}>Sign In</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signin;
