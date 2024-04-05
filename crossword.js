
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
  import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAy0Sw14qHbsLeejdu_qVKkUzK9TM1WZ9s",
    authDomain: "crossword-comixclub.firebaseapp.com",
    projectId: "crossword-comixclub",
    storageBucket: "crossword-comixclub.appspot.com",
    messagingSenderId: "700375577053",
    appId: "1:700375577053:web:7949c57e1816f6814cc634"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const db = getDatabase(app);

  document.getElementById("submit").addEventListener('click', function(e){
   e.preventDefault(); 
   set(ref(db, 'user/' + document.getElementById("username").value),
   {

     a1: document.getElementById("1a").value,
     b1: document.getElementById("1b").value,
     c1: document.getElementById("1c").value
     

   });
     alert("Login Sucessfull  !");
  })
