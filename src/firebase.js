import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAQaaPqtCI4WxhPeHbM0AwQ0x_p_1ym0OU",
    authDomain: "facebook-clone-7e58c.firebaseapp.com",
    databaseURL: "https://facebook-clone-7e58c.firebaseio.com",
    projectId: "facebook-clone-7e58c",
    storageBucket: "facebook-clone-7e58c.appspot.com",
    messagingSenderId: "988253598055",
    appId: "1:988253598055:web:fd6e08c8904aadf401bfc2",
    measurementId: "G-RERZ57NW0Y"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db= firebaseApp.firestore();

  const auth= firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider }
  
  export default db;