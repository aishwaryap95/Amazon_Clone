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
            title="The Lean StartUp"
            price={29.99}
            image="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220.jpg"
            rating={5}
          />
          <Product
            id="3735"
            title="The Lean StartUp"
            price={29.99}
            image="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220.jpg"
            rating={5}
          />
        </div>

        <div className="home_row">
          {/* Product */}
          <Product
            id="2753"
            title="The Lean StartUp"
            price={29.99}
            image="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220.jpg"
            rating={5}
          />
          <Product
            id="123735"
            title="The Lean StartUp"
            price={29.99}
            image="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220.jpg"
            rating={5}
          />
          <Product
            id="3222"
            title="The Lean StartUp"
            price={29.99}
            image="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220.jpg"
            rating={5}
          />
        </div>

        <div className="home_row">
          {/* Product */}
          <Product
            id="123735"
            title="The Lean StartUp"
            price={29.99}
            image="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
