import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'

const Checkout = () => {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/PayCode/FinalAssets/Desktop/English/AmazonExports_FIAT_OnSite_Concepts_R3_DesktopStripe_1500x120_v1.png"
          alt="amazon-ad"
          className="checkout__ad"
        />

        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  )
}

export default Checkout
