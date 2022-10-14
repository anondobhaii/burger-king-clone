import React from "react";
import { Helmet } from "react-helmet";
import Burgerapp from "../components/Burgerapp";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Posts from "../components/Posts";


function Home() {

  return (
    <div>
      <Helmet>
        <title>Burger King</title>
      </Helmet>
      <Header /> 
      <Posts />
      <Burgerapp />
      <Nav />
      <Footer />

    </div>
  );
}

export default Home;
