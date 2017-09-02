
   
function passReset(){
var email = document.getElementById("email").value;
var email = "email"
if ( email == "email"){
alert ("A message is sent to your email with a new password!");
window.location = "login.html"; // Redirecting to home page.
return false;
}
else{

alert("Please enter email");

}
}
