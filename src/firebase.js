import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAtwrkrUb83Fnalf-FbJubLSxsCHWYwhyU",
    authDomain: "whatsapp-clone-62615.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-62615.firebaseio.com",
    projectId: "whatsapp-clone-62615",
    storageBucket: "whatsapp-clone-62615.appspot.com",
    messagingSenderId: "335000779763",
    appId: "1:335000779763:web:ad8bf6dd061292aed73086",
    measurementId: "G-GWFF8VFVVR"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;