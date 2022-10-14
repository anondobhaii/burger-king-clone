import React from "react";
import {Link} from 'react-router-dom'

function Legal() {
  const data = [
    {
      url: "#",
      linkName: "Terms of Services",
    },
    {
      url: "#",
      linkName: "Privacy Policy",
    },
    {
      url: "#",
      linkName: "Trademarks",
    },
    {
      url: "#",
      linkName: "Accessibility",
    },
    {
      url: "#",
      linkName: "Unsolicited Idea Policy",
    },
    {
      url: "#",
      linkName: "Attribuitions",
    }
  ];

  const style = {
    supportContainer: "flex flex-col items-start gap-2",
    link: "flamesan hover:underline decoration-2"
  };

  return (
    <div className={style.supportContainer}>
      <h3>Legal</h3>
      {data.map((d) => (
        <Link className={style.link}>{d.linkName}</Link>
      ))}
    </div>
  );
}

export default Legal;
