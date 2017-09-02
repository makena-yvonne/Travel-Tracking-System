var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;
	if ( email == "staff@unep.org" && password == "unep#123"){
		alert ("Login successfully");
	window.location = "index.html"; // Redirecting to home page.
}
else if ( email == "supervisor@unep.org" && password == "unep#123")
{
	alert ("Welcome Supervisor");
	window.location = "supervisor.html"; // redirrecring to supervisor.html
}
else 
{
 	attempt --;// Decrementing by one.
	alert("Please fill in the correct details.You have left "+attempt+" attempts");
// Disabling fields after 3 attempts.
if( attempt == 0){
	document.getElementById("email").disabled = true;
	document.getElementById("password").disabled = true;
	document.getElementById("submit").disabled = true;
	alert("Please consult service care;");
	return false;
}
}
}