import { Link, useHistory } from 'react-router-dom'
import React, { useState } from 'react'
import CheckoutProduct from './CheckoutProduct'
import './Payment.css'
import { useStateValue } from './StateProvider'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import CurrencyFormat from 'react-currency-format'
import { totalPrice } from './reducer'
import axios from './axios'
import { useEffect } from 'react'

function Payment() {
  const history = useHistory()
  const [{ basket, user }, dispatch] = useStateValue()

  const stripe = useStripe()
  const elements = useElements()

  const [succeeded, setSucceeded] = useState(false)
  const [processing, setProcessing] = useState('')
  const [error, setError] = useState(null)
  const [disabled, setDisabled] = useState(true)
  const [clientSecret, setClientSecret] = useState(true)

  useEffect(() => {
    //generate the special stripe secret which allow us to charge the customer

    const getClientSecret = async () => {
      const response = await axios({
        method: 'post',
        //Stripe expect the total in a currences subunits
        url: `/payments/create?total=${totalPrice(basket) * 100}`,
      })

      setClientSecret(response.data.clientSecret)
    }

    getClientSecret()
  }, [basket])

  const handleSubmit = async (event) => {
    //do all the fancy stripe stuff
    event.preventDefault()
    setProcessing(true)

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        //PaymentIntent == payment confirmation
        setSucceeded(true)
        setError(null)
        setProcessing(false)

        history.replace('/orders')
      })
  }

  const handleChange = (event) => {
    setDisabled(event.empty)
    setError(event.error ? event.error.message : '')
  }

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (
          <Link to="/checkout">
            {basket?.length} {basket?.length > 1 ? ' Items' : ' Item'}
          </Link>
          )
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>Esho.id Corporation</p>
            <p>Bengkulu, Indonesia</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review Items and Delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                price={item.price}
                image={item.image}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />

              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <h3>Order Total : {value}</h3>
                    </>
                  )}
                  decimalScale={2}
                  value={totalPrice(basket)}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'$'}
                />

                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : 'Buy Now'}</span>
                </button>
              </div>

              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment
