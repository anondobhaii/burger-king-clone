import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Nav from "../components/Nav";

function Aboutbk() {
  const style = {
    wrapper: "h-screen",
    aboutbkContainer: "mt-[73px]",
    head: "py-[32px] w-full text-[#f5ebdc] bg-[#502314] text-[52px] text-center",
    body: "px-4 pt-6 text-[#502314] max-w-[800px] mx-auto",
  };

  return (
    <div>
      <Header />
      <div className={style.wrapper}>
        <div className={style.aboutbkContainer}>
          <h1 className={style.head}>About Us</h1>
        </div>
        <div className={style.body}>
          <h3 className="text-[18px] md:text-[28px]">Great Food Comes First</h3>
          <p className="flamesan pt-2 pb-6 md:text-[18px]">
            Every day, more than 11 million guests visit Burger King restaurants
            around the world. And they do so because our restaurants are known
            for serving high-quality, great-tasting, and affordable food.
            Founded in 1954, Burger King is the second largest fast food
            hamburger chain in the world. The original Home of the Whopper, our
            commitment to premium ingredients, signature recipes, and
            family-friendly dining experiences is what has defined our brand for
            more than 50 successful years.
          </p>
          <h3 className="text-[18px] md:text-[28px]">Contact</h3>
          <h3 className="pt-2 flamesan md:text-[18px]">
            Burger King Corporation
          </h3>
          <p className="md:text-[18px]">Phone Number: 1-866-394-2493</p>
        </div>
      </div>
      <Nav />
      <Footer />
    </div>
  );
}

export default Aboutbk;
