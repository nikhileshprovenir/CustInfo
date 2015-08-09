

$(document).ready(function() {

 
  $("#comments").live('keydown',numberOnly);
 
 $("#name").die('keydown');
 $("#name").live('keydown',NameandSpace);

 
 

 
 $('#email').change(function() {
	        var sEmail = $('#email').val();
	        if ($.trim(sEmail).length == 0) {
	           // alert('Please enter valid email address');
	            e.preventDefault();
	        }
	        if (validateEmail(sEmail)) {
	         //   alert('Email is valid');
	        }
	        else {
	        	 $('#email').val("");
	        	 $("#errorResponse").html("Please Enter a valid Email Address.");
			     $("#errorResponse").dialog({
			      buttons: { "Ok": function(){
			        $(this).dialog("close");
			       }
			      },
			      title :"Error Message",
			      closeOnEscape: true,
			      modal: true
			     }); 
				
			    
	           //sEmail == 0;
	        }
	    });

	function validateEmail(sEmail) {
	    var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
	    if (filter.test(sEmail)) {
	        return true;
	    }
	    else {
	        return false;
	    }
	}
 
 });
 function numberOnly(e)
{
    var key = e.charCode || e.keyCode || 0;
    // allow backspace, tab, delete, arrows, numbers and keypad numbers ONLY
    return (
    key == 8 ||
    key == 9 ||
    key == 46 ||
    (key >= 37 && key <= 40) ||
    (key >= 48 && key <= 57) ||
    (key >= 96 && key <= 105));
}

function NameandSpace(e)
{
 var key = e.charCode || e.keyCode || 0;
 return(
   key == 8 || //backspace
      key == 9 || //tab
      key == 32 || //space
   (key >= 65 && key <= 90) ||
   (key >= 97 && key <= 122)
   );
}
/* End General Info*/
//@ sourceURL=dynamicScript.js
