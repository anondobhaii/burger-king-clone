import React from "react";
import {Link} from "react-router-dom"

function Support() {
    const data =[{
        url: "#",
        linkName: "Contact Us"
    },{
        url: "#",
        linkName: "FAQ"
    },{
        url: "#",
        linkName: "Crown Card"
    },{
        url: "#",
        linkName: "Resturant Survey"
    }] 

  const style = {
    supportContainer: "flex flex-col items-start gap-2",
    link: "flamesan hover:underline decoration-2"
  };

  return (
    <div className={style.supportContainer}>
      <h3>Support</h3>
      {data.map((d) =>
        <Link className={style.link}>{d.linkName}</Link>
      )}
    </div>
  );
}

export default Support;
