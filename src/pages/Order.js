import React, { useState } from "react";
import Nav from "../components/Nav";
import { TextField } from "@mui/material";
import Header from "../components/Header";
import Girl from "../assets/imgs/girl.png";
import { Helmet } from "react-helmet";

function Order() {
  const [search, setSearch] = useState("");

  return (
    <>
      <Helmet>
        <title>Order - Burger King</title>
      </Helmet>
      <div className="px-4 py-8 flex flex-col items-center text-[#502314]">
        <div className="hidden lg:inline-flex">
          <Header />
        </div>
        <h1 className=" text-2xl lg:text-4xl text-center mb-8 lg:mt-[130px]">
          Locations
        </h1>
        <div className="px-8 w-full relative">
          <TextField
            fullWidth
            label="Your Address"
            id="fullWidth"
            size="small"
            className="bg-white"
            onChange={(e) => setSearch(e.target.value)}
            autoComplete="off"
            InputLabelProps={{
              style: { color: "#502314" },
            }}
          />
          {search && (
            <p className="shadow-md bg-white p-4 rounded-lg text-sm text-[#502314] flamesan">
              There are no location that match your search.
            </p>
          )}
        </div>
        <div className="flex flex-col items-center mt-[100px] space-y-4">
          <img src={Girl} alt="" />
          <h3 className="text-xl lg:text-2xl">Find a Location Nearby</h3>
          <p className="flamesan text-center">
            Let us know where you are so we can recommend nearby locations.
          </p>
          <button className="text-lg lg:text-xl text-[20px] py-3 px-8 text-[#ffffff] bg-[#d62300] rounded-full">
            Share Location
          </button>
        </div>

        <Nav />
      </div>
    </>
  );
}

export default Order;
