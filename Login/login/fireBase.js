var fireBase = fireBase || firebase;
var hasInit = false;
var config = {
  apiKey: "AIzaSyBihWcopIWDaPF4w6-4obXZ8wsOAp02pAk",
  authDomain: "fire-fd63d.firebaseapp.com",
  databaseURL: "https://fire-fd63d-default-rtdb.firebaseio.com",
  projectId: "fire-fd63d",
  storageBucket: "fire-fd63d.appspot.com",
  messagingSenderId: "729629206102",
  appId: "1:729629206102:web:e81828ba6c02dbce5f7df7"
  };
if(!hasInit){
    firebase.initializeApp(config);
    hasInit = true;
}


