import React, { useState, useEffect } from "react";
import Cardscg from "../components/Cardscg";
import CgDiv from "../components/CgDiv";
import ProductsC from "../components/ProductsC";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import "./Home.css";
import { Divider } from "@chakra-ui/react";

const Home = () => {
  return (
    <>
      <div className="shoppage">
        <Helmet>
          <title>Home</title>
        </Helmet>
        <ProductsC />
      </div>
      <Divider />
    </>
  );
};

export default Home;
