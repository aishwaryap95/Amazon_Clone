//rfce
import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220.jpg"
          alt=""
        />

        <div className="home_row">
          {/* Product */}
          {/* Product */}
          <Product
            id="3421"
            title="STRIFF Adjustable Laptop Tabletop Stand Patented Riser Ventilated Portable Foldable Compatible with MacBook Notebook Tablet Tray Desk Table Book with Free Phone Stand (Black)"
            price={399}
            image="https://m.media-amazon.com/images/I/71Zf9uUp+GL._SX522_.jpg"
            rating={4}
          />
          <Product
            id="3735"
            title="Logitech B170 Wireless Mouse, 2.4 GHz with USB Nano Receiver, Optical Tracking, 12-Months Battery Life, Ambidextrous, PC/Mac/Laptop - Black"
            price={595}
            image="https://m.media-amazon.com/images/I/516LU0H963L._SX679_.jpg"
            rating={5}
          />
        </div>

        <div className="home_row">
          {/* Product */}
          <Product
            id="2753"
            title="American Tourister Spin 49 cms Teal Laptop Backpack"
            price={1699}
            image="https://m.media-amazon.com/images/I/41mnppihT4L.jpg"
            rating={5}
          />
          <Product
            id="123735"
            title="Redgear Blaze Semi-Mechanical wired Gaming keyboard with 3 colour backlit, full aluminium body & Windows key lock for PC ( Black )"
            price={999}
            image="https://m.media-amazon.com/images/I/61M2CPqMgwL._SX522_.jpg"
            rating={5}
          />
          <Product
            id="3222"
            title="Duracell USB Type C, 3A Braided Sync & Quick Charging Cable, 3.9 Feet (1.2M), QC 2.0/3.0 Fast Charging, Compatible with Samsung, MI, Realme & all C type devices, Rapid Data Transmission, Series 1"
            price={229}
            image="https://m.media-amazon.com/images/I/71LlHDTLhaL._SX679_.jpg"
            rating={5}
          />
        </div>

        <div className="home_row">
          {/* Product */}
          <Product
            id="123735"
            title="American Tourister 32 Ltrs Black Casual Backpack (AMT FIZZ SCH BAG 02 - BLACK)"
            price={29.99}
            image="https://m.media-amazon.com/images/I/81KEKEDFUcL._SY879_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
