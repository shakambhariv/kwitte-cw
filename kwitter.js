function adduser(){
    var userName=document.getElementById("user_name").value 
    localStorage.setItem("name of guest user",userName)
    window.location="kwitter_room.html"


}