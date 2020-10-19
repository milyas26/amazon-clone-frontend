const functions = require('firebase-functions')
const express = require('express')
const cors = require('cors')
const stripe = require('stripe')(
  'sk_test_51HdsxqIZNtpRom6rR27TeRNlNySp9JRzmJzSmN8D5rB4Nz9luA8H4BQqRTJvj915ktpsONg7kEKORjpD0WK3Ss2E00FMWRrlMM',
)

//API

// - APP CONFIG
const app = express()

// - MIDDLEWARES
app.use(cors({ origin: true }))
app.use(express.json())

// - API ROUTES
app.get('/', (req, res) => {
  res.status(200).send('Hello World!')
})

app.post('/payments/create', async (req, res) => {
  const total = req.query.total
  console.log('Payment request received! ', total)

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: 'usd',
  })

  //201 == OK - Created
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  })
})

// - LISTEN COMMAND
exports.api = functions.https.onRequest(app)

//Example Endpoint
//http://localhost:5001/clone-1da0e/us-central1/api
