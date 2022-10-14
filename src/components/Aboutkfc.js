import React from 'react'
import {Link} from 'react-router-dom'

function Aboutkfc() {
    const data = [
        {
            url: "/about-bk",
            linkName: "About BK"
        },
        {
            url: "#",
            linkName: "Careers"
        },
        {
            url: "#",
            linkName: "Franchising"
        },
        {
            url: "#",
            linkName: "Nutrition"
        },
        {
            url: "#",
            linkName: "Offer Terms"
        },
        {
            url: "#",
            linkName: "Delivery Terms"
        }
    ]
    
    const style = {
        aboutkfcContainer : "flex flex-col items-start gap-2" ,
        link: "flamesan hover:underline decoration-2"
    }

  return (
    <div className={style.aboutkfcContainer}>
        <h3>About BFC</h3>
        {data.map((d)=>
            <Link to={d.url} className={style.link}>{d.linkName}</Link>
        )}
    </div>
  )
}

export default Aboutkfc