import React from 'react'
import './Home.css'
import Product from './Product'

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_Tallhero_Dash_en_US_1x._CB418727898_.jpg"
          alt="Amazon banner"
        />

        <div className="home__row">
          <Product
            id="228787"
            title="AmazonBasics Underseat, Carry-On Rolling Travel Luggage Bag with Wheels, 14 Inches"
            price={22.99}
            img="https://m.media-amazon.com/images/I/91qC+UYYwIL._AC_UL320_.jpg"
            rating={5}
          />
          <Product
            id="987726"
            title="Bose QuietComfort 35 II Wireless Bluetooth Headphones, Noise-Cancelling, with Alexa voice control - Black"
            price={2299.99}
            img="https://images-na.ssl-images-amazon.com/images/I/41jSuUHT8eL._AC_US160_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="665645"
            title="WD 12TB Elements Desktop Hard Drive, USB 3.0 - WDBWLG0120HBK-NESN"
            price={219.99}
            img="https://images-na.ssl-images-amazon.com/images/I/31NBRkcO0ZL._AC_US160_.jpg"
            rating={5}
          />
          <Product
            id="096899"
            title="JBL Boombox - Waterproof Portable Bluetooth Speaker - Black"
            price={399.67}
            img="https://images-na.ssl-images-amazon.com/images/I/41JNB2gbb2L._AC_US160_.jpg"
            rating={4}
          />
          <Product
            id="453372"
            title="SanDisk 128GB Extreme microSDXC UHS-I Memory Card with Adapter - C10, U3, V30, 4K, A2, Micro SD - SDSQXA1-128G-GN6MA"
            price={23.99}
            img="https://images-na.ssl-images-amazon.com/images/I/41O4rjSlneL._AC_US160_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="133323"
            title="LG 34WN80C-B 34 inch 21:9 Curved UltraWide WQHD IPS Monitor with USB Type-C Connectivity sRGB 99% Color Gamut and HDR10 Compatibility, Black (2019)"
            price={599.99}
            img="https://images-na.ssl-images-amazon.com/images/I/81WBbFOEHwL._AC_SL1500_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  )
}

export default Home
