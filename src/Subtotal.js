import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'
import { totalPrice } from './reducer'
import { useHistory } from 'react-router-dom'

function Subtotal() {
  const history = useHistory()
  const [{ basket }, dispatch] = useStateValue()

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} {basket.length > 1 ? ' Items' : ' Item'}
              ):
              <strong> {value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" className="checkbox" /> This order contain
              a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={totalPrice(basket)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />

      <button onClick={(e) => history.push('/payment')}>
        Proceed to Checkout
      </button>
    </div>
  )
}

export default Subtotal
