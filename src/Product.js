import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'

const Product = ({ id, title, price, img, rating }) => {
  const [{ basket }, dispatch] = useStateValue()

  console.log('This is the basket : ', basket)
  const addToBasket = () => {
    //Dispatch the item into the data layer
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        price: price,
        image: img,
        rating: rating,
      },
    })
  }
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={img} alt="Product" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  )
}

export default Product
