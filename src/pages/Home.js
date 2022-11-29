import React, { useState, useEffect } from "react";
import ProductsC from "../components/ProductsC";
import { Helmet } from "react-helmet";

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
