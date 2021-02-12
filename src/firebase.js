import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAGppvkVdyAdWozjw3N9Sj4PlDtpzGiIMg",
    authDomain: "auth-redux-76c87.firebaseapp.com",
    projectId: "auth-redux-76c87",
    storageBucket: "auth-redux-76c87.appspot.com",
    messagingSenderId: "1091453164568",
    appId: "1:1091453164568:web:01bf73362cdd1ef7e6776d"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {auth,provider}

