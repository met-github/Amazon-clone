import React from 'react'
import './Home.css'
import Product from './Product'
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="12321341"
            title="LED 65-Inch Class Google Smart TV with Alexa"
            price={898}
            rating={5}
            image="https://m.media-amazon.com/images/I/71acFqj-OGL._AC_UL320_.jpg"
          />

          <Product
            id="49538094"
            title="Amazon Fire TV 4k Smart TVs"
            price={239.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/41Wajxw6JnL._AC_UF420%2C420_FMjpg_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="Tv Set"
            price={499}
            rating={3}
            image="https://m.media-amazon.com/images/S/al-na-9d5791cf-3faf/9c4051f2-c078-4971-80f7-2af707b5f984._CR146,0,2389,1250_SX507_QL70_.jpg"
          />
          <Product
            id="23445930"
            title="Apple MacBook Pro 16.2"
            price={3699}
            rating={5}
            image="https://m.media-amazon.com/images/I/51fVpA-sVfL._AC_UL320_.jpg"
          />
          <Product
            id="3254354345"
            title="TLYS Ornament Candle Warmer Lamp, Dimmable Candle Lamp, Electric Candle Warmer with Timer"
            price={28.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/61V7i80d8QL._AC_UL320_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="ZINUS Curtis Upholstered Platform Bed Frame / Mattress Foundation / Wood Slat Support / No Box Spring Needed / Easy Assembly, Grey, Queen"
            price={99}
            rating={4}
            image="https://m.media-amazon.com/images/I/817gMGhTobL._AC_UL320_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home
