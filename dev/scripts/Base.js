import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDMtdm57Vo21xtYXIVJgOevkIi2DP4T8x4",
  authDomain: "beer-tracker-3fb9b.firebaseapp.com",
  databaseURL: "https://beer-tracker-3fb9b.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
