import React from 'react'
import {Link} from 'react-router-dom'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import sauce from '../assets/imgs/sauce.svg'
import { Helmet } from 'react-helmet'


function Notfound() {
    const style = {
        notfoundContainer: 'flex flex-col h-screen items-center justify-center text-[#502314] text-center max-w-[344px] mx-auto px-4',
        head: "text-[24px]",
        para: "flamesan",
        button1: "w-full py-3 text-[#ffffff] bg-[#d62300] rounded-full mt-4",
        button2: "w-full py-3 text-[#d62300] border border-[#d62300] rounded-full mt-4",
    }

    function refreshPage() {
        window.location.reload(false);
      }

  return (
    <div>
        <Header />
        <div className={style.notfoundContainer}>
            <Helmet>
                <title>Page Not Found - Burger King</title>
            </Helmet>
            <img src={sauce} alt="" />
            <h1 className={style.head}>Whoops!</h1>
            <p className={style.para}>The page you were looking for was moved or doesn't exist</p>
            <Link to="/" className={style.button1}>Homepage</Link>
            <button onClick={refreshPage} className={style.button2}>Refresh</button>
        </div>
        <Nav />
        <Footer />

    </div>
  )
}

export default Notfound