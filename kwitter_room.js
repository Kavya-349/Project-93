// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCXnzs2V2YIxoFrTksr0qW1WivxXqa5ig8",
    authDomain: "classtest-977cd.firebaseapp.com",
    databaseURL: "https://classtest-977cd-default-rtdb.firebaseio.com",
    projectId: "classtest-977cd",
    storageBucket: "classtest-977cd.appspot.com",
    messagingSenderId: "539828825165",
    appId: "1:539828825165:web:f489f04c002e32ce744004"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addRoom() {
    room_name = document.getElementById("room_input").value;
    localStorage.setItem("Room Name", room_name);
    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
    });
}
