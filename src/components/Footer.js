import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/imgs/burgertext.svg";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";

function Footer() {
  const bkcinfo = [
    {
      url: "/about-bk",
      link: "About BK",
    },
    {
      url: "#",
      link: "Trademarks Notice",
    },
    {
      url: "#",
      link: "Food Quality",
    },
    {
      url: "#",
      link: "News & Press",
    },
    {
      url: "#",
      link: "Global Media Contacts",
    },
    {
      url: "#",
      link: "Investor Relations",
    },
    {
      url: "#",
      link: "Franchising",
    },
    {
      url: "#",
      link: "International",
    },
    {
      url: "#",
      link: "Menu",
    },
  ];

  const mybk = [
    {
      url: "#",
      link: "BK App",
    },
    {
      url: "#",
      link: "Gift Cards / Crown Cards",
    },
    {
      url: "#",
      link: "Reload Card",
    },
    {
      url: "#",
      link: "Check Card Balance",
    },
  ];

  const careers = [
    {
      url: "#",
      link: "Careers Home",
    },
    {
      url: "#",
      link: "Opportunities",
    },
    {
      url: "#",
      link: "Apply",
    },
  ];

  const bkcares = [
    {
      url: "#",
      link: "Nutrition Explorer",
    },
    {
      url: "#",
      link: "Download Allergens",
    },
    {
      url: "#",
      link: "Allergens View in Browser",
    },
    {
      url: "#",
      link: "Privacy Policy",
    },
    {
      url: "#",
      link: "Do Not Sell My Personal Information",
    },
    {
      url: "#",
      link: "Sustainability",
    },
    {
      url: "#",
      link: "Burger King Foundation",
    },
    {
      url: "#",
      link: "Diversity",
    },
  ];

  const style = {
    footerContainer:
      " w-full px-[120px] pt-[90px] pb-[50px] bg-[#2b0200] text-[#f5ebdc] hidden lg:inline-block",
    catagorySec1:
      "flex items-start justify-between pb-[64px] border-b border-b-[#f5ebdc]",
    catagory: "flex flex-col",
    head: "text-[26px]",
    link: "text-[15px] flamesan text-[#BBA391] hover:underline decorartion-2",
    trade: "text-[12px] flamesan text-[#BBA391] py-2",
    catagorySec2: "pt-[20px]",
  };

  return (
    <div className={style.footerContainer}>
      <div className={style.catagorySec1}>
        <div className={style.catagory}>
          <h2 className={style.head}>BKC INFO</h2>
          {bkcinfo.map((d) => (
            <Link to={d.url} className={style.link}>{d.link}</Link>
          ))}
        </div>
        <div className={style.catagory}>
          <h2 className={style.head}>MY BK</h2>
          {mybk.map((d) => (
            <Link to={d.url} className={style.link}>{d.link}</Link>
          ))}
        </div>
        <div className={style.catagory}>
          <h2 className={style.head}>CAREERS</h2>
          {careers.map((d) => (
            <Link to={d.url} className={style.link}>{d.link}</Link>
          ))}
        </div>
        <div className={style.catagory}>
          <h2 className={style.head}>BK CARES</h2>
          {bkcares.map((d) => (
            <Link to={d.url} className={style.link}>{d.link}</Link>
          ))}
        </div>
      </div>
      <div className={style.catagorySec2}>
        <div className="py-3 flex items-center justify-between">
          <img src={Logo} alt="" className="c1" />
          <div className="flex gap-4 items-center">
            <Link>
              <InstagramIcon />
            </Link>
            <Link>
              <FacebookIcon />
            </Link>
            <Link>
              <YouTubeIcon />
            </Link>
            <Link>
              <TwitterIcon />
            </Link>
          </div>
        </div>
        <div className="flex gap-8 py-2">
            <Link className={style.link}>Policies</Link>
            <Link className={style.link}>Terms of Services</Link>
            <Link className={style.link}>Accessibility</Link>
            <Link className={style.link}>Contact Us</Link>
        </div>
            <p className={style.trade}>TM & Copyright 2021 Burger King Corporation. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
