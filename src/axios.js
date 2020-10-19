import React from 'react'
import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:5001/clone-1da0e/us-central1/api',
  // baseURL: 'https://us-central1-challenge-4b2b2.cloudfunctions.net/api',
})

export default instance
