import app from "firebase/app";
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBowUpfFSlLk6IaaSavR2sPnN0mNsk9Da4",
    authDomain: "friendlymatch-5cdfe.firebaseapp.com",
    databaseURL: "https://friendlymatch-5cdfe.firebaseio.com",
    projectId: "friendlymatch-5cdfe",
    storageBucket: "friendlymatch-5cdfe.appspot.com",
    messagingSenderId: "157876657703",
    appId: "1:157876657703:web:1c8b45f5b70dcadabd7802",
    measurementId: "G-BSSNVDB2RH"
  };

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
 
    this.auth = app.auth;
    this.database = app.database;
  }
}
 
export default Firebase;