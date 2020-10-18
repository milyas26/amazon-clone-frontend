import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCU9Ert4pa863CCDpAq9Wb1fwKYRWJEwrI',
  authDomain: 'clone-1da0e.firebaseapp.com',
  databaseURL: 'https://clone-1da0e.firebaseio.com',
  projectId: 'clone-1da0e',
  storageBucket: 'clone-1da0e.appspot.com',
  messagingSenderId: '799979909991',
  appId: '1:799979909991:web:76216741ce9a749b2e75c2',
  measurementId: 'G-Q67MF8SWEH',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }
