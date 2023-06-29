//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyDOZ8Z3-4znBIRV6aD0d7Ex2-zX-ILrqvo",
      authDomain: "c19-nwlp.firebaseapp.com",
      databaseURL: "https://c19-nwlp-default-rtdb.firebaseio.com",
      projectId: "c19-nwlp",
      storageBucket: "c19-nwlp.appspot.com",
      messagingSenderId: "43196460260",
      appId: "1:43196460260:web:f04ff72ecf5049650550f1"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    room_name=localStorage.getItem("room_name")
    user_name=localStorage.getItem("name of guest user")

    function send(){
      msg=document.getElementById("msg").value 
      
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout(){
      window.location="index.html"
      localStorage.removeItem("room_name")
      localStorage.removeItem("name of guest user")
}