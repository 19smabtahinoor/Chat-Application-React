import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCIp75IJBI7Ud-cWlRwCYl7KVNlbICpYBI",
  authDomain: "chat-application-react-72ca5.firebaseapp.com",
  projectId: "chat-application-react-72ca5",
  storageBucket: "chat-application-react-72ca5.appspot.com",
  messagingSenderId: "417472835318",
  appId: "1:417472835318:web:2cbb55e65c52df199206d7",
  measurementId: "G-LY2PD3YK4P"
})

const db = firebaseApp.firestore()
export default db 