function travel_submit(){

 alert("Details Submitted to Supervisor");
	window.location = "index.html";
}	



function validateForm(){


    var nameReg = /^[A-Za-z]+$/;
    var numberReg =  /^[0-9]+$/;
    
    var names = $('#name').val();
    var meeting = $('#meeting').val();
  
    // var message = $('#messageInput').val();

    var inputVal = new Array(names, meeting);

    var inputMessage = new Array("name", "meeting");

    if ($('.error').hide()) {

        if(inputVal[0] == ""){
            $('#nameLabel').after('<span class="error"> Please enter your ' + inputMessage[0] + '</span>');
        } 
        else if(!nameReg.test(names)){
            $('#nameLabel').after('<span class="error"> Letters only</span>');
        }

        if(inputVal[1] == ""){
            $('#meetingLabel').after('<span class="error"> Please enter your ' + inputMessage[1] + '</span>');
        }
      
}   

else	
{
	alert("Details Submitted to Supervisor");
	window.location = "index.html";
}
}