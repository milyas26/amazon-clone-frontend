import React, { useEffect } from 'react'
import Header from './Header'
import Home from './Home'
import Checkout from './Checkout'
import Login from './Login'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { auth } from './firebase'

import './App.css'
import { useStateValue } from './StateProvider'

function App() {
  const [{}, dispatch] = useStateValue()

  useEffect(() => {
    //will only run once when app component load
    auth.onAuthStateChanged((authUser) => {
      console.log('The user is >> ', authUser)

      if (authUser) {
        //the user just logged in / the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser,
        })
      } else {
        //The user is logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
