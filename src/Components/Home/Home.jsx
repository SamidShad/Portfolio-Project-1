import React from "react";
// IMPORT SECTIONS ->>
import Loader from "../Loader/Loader";
import "react-toastify/dist/ReactToastify.css";
import Hero from "../Hero/Hero";
import ProductSider from "../ProductSider/ProductSider";
import Overview from "../Overview/Overview";
import HeadPhoneDesign from "../HeadPhoneDesign/HeadPhoneDesign";
import BatteryLife from "../BatteryLife/BatteryLife";
import RelatedProducts from "../RelatedProducts/RelatedProducts";
import Footer from "../Footer/Footer";

function Home() {
  return (
    <>
      {/* SHOW SECTIONS ->> */}
      <Hero />
      <ProductSider />
      <Overview />
      <HeadPhoneDesign />
      <BatteryLife />
      <RelatedProducts />
      <Footer />
      <Loader />
    </>
  );
}

export default Home;
