
//ADD YOUR FIREBASE LINKS HERE
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

   var local=localStorage.getItem("name of guest user")
   document.getElementById("value").innerHTML="welcome "+local+"!"

   function add_room(){
   room_name=document.getElementById("room_name").value
   localStorage.setItem("room_name",room_name)
   firebase.database().ref("/").child(room_name).update({purpose:"hi"})
   window.location="kwitter_page.html"
   }

   
function logout(){
  window.location="index.html"
  localStorage.removeItem("name of guest user")
  localStorage.removeItem("room_name")
}






function getData() {firebase.database().ref("firebase r").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
     console.log(Room_names)
    var row= '<div id=" '+Room_names+'"  onclick="redirect(this.id)">'+ Room_names+'</div>'
    document.getElementById("output").innerHTML +=row
      });});}
getData();

function redirect(name){
  console.log(name)
 localStorage.setItem("room_name",name)
 window.location="kwitter_page.html"
}
 

