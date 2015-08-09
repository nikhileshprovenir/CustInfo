

$(document).ready(function() {

 
 $("#saveclick").die("click");
 // $("#saveclick").live("click", reqvalidateandsaveGeneralApplicant);
// $("#saveclick").live("click", validateAndSaveApplicant);
$("#saveclick").live("click", saveGeneralApplicant);
 $("#save").die("click");
 // $("#saveclick").live("click", reqvalidateandsaveGeneralApplicant);
// $("#saveclick").live("click", validateAndSaveApplicant);
$("#save").live("click", saveGeneralApplicant);
 //CANCEL BUTTONS LOGIC


 //TELEPHONE AND SNN FORMAT
  $('.CUSnnFormat').mask("999-99-9999");
 $('.CUPhoneFormat').mask("(999) 999-9999");


 //HOUSE FORMAT

 $("#yearsAtAddr").live('keydown',numberOnly);
 
//NAME FORMAT 
 
 $("#name").die('keydown');
 $("#name").live('keydown',NameandSpace);
/* $("#lnm").die('keydown');
 $("#lnm").live('keydown',NameandSpace);
 $("#mnm").die('keydown');
 $("#mnm").live('keydown',NameLetteronly);
 
 
// $("#dob_").change(isGoodDate);
 
 //$("#dob_").live('change',isGoodDate);
 
 */
 
 
 
 /*function ok(){
 if(reqvalidate())
 {
 	saveGeneralApplicant();   
 	} 
 else { 
 	false;
 	}
}
 
*/
 
 function validateAndSaveApplicant(){
 if(reqvalidate())
 {
 	saveGeneralApplicant();   
 	} 
 else { 
 	false;
 	}
}
 

 function reqvalidate()
 {
 	//alert("please enter required fields");
 	var firstName = $('#fnm').val();
 	var lastName = $('#lnm').val();
 	var ssn = $('#ssnumber').val();
 	var dob = $('#dob_').val();
 	var dob_CB = $('#dob_CB').val();
 	var emailadd = $('#email').val();
 	var mort = $('#mortgage').val();
 	var stnm = $('#street').val();
 	var stno = $('#streetNo').val();
 	var city = $('#city').val();
 	var zip = $('#zipCd').val();
 	var tadd = $('#yearsAtAddr').val();
 	var empnm = $('#employerName').val();
 	var jobt = $('#jobtitle').val();
 	var moninc = $('#grossAmnt').val();
 	var tjob = $('#yearsAtJob').val();
 	var phno = $('#PhoneNumber').val();
 	
 	
 	if( (!firstName==null || !firstName=="") && (!lastName==null || !lastName=="") && (!ssn==null || !ssn=="") && ((!dob==null || !dob=="") || (!dob_CB==null || !dob_CB=="")) && (!emailadd==null || !emailadd=="") && (!mort==null || !mort=="") && (!stnm==null || !stnm=="") && (!stno==null || !stno=="") && (!city==null || !city=="") && (!zip==null || !zip=="") && (!tadd ==null || !tadd =="") && (!empnm==null || !empnm=="") && (!jobt==null || !jobt=="") && (!moninc==null || !moninc=="") && (!tjob==null || !tjob=="") && (!phno==null || !phno=="")){
 		//alert("good");
 		return true;
 	}
 	else{
 		
 		alert("Please Enter The Required Fields");
 		return false;
 	}}
 

 $('#yearsAtAddr').change(function(e) {
	    var $birthday = $('#dob_').val();
	    var $year = $('#yearsAtAddr').val();

	    if (calculateAge($birthday) < $year)
	    {$('#yearsAtAddr').val(""); 
	    	alert("Should not be greater than applicant's age.");
	     
	    }
	else{
		return false;}
		});

 

  
 $('#dob_').change(function(e) {
	    e.preventDefault();
	    var $birthday = $('#dob_').val();
	  	  //  var date_regex = /^(?:(0[1-9]|1[012])[-\/.](0[1-9]|[12][0-9]|3[01])[-\/.](19|20)[0-9]{2})$/;
	   // date_regex.test('#dob_');
	    if (calculateAge($birthday) <=0 )
	    {  $('#dob_').val("");
	    	alert("Please Enter a Valid Date Range, It cannot be Present Year");
			}
	     else if (calculateAge($birthday) > 110)
	     
		    { $('#dob_').val(""); 
	    	 alert("Cannot be greater than 110 years. Please enter again");
	   }
	 /*    else if ((!date_regex.test(e)))
	    	 
	    	 alert("karma");
		    /*{ $("#errorResponse").html("Please REGEX");
	     $("#errorResponse").dialog({
		      buttons: { "Ok": function(){
		        $(this).dialog("close");
		       }
		      },
		      title :"Error Message",
		      closeOnEscape: true,
		      modal: true
	     });		} */
	    else{
	    	return false;}
	    	});
 
 var calculateAge = function(birthday) {
	    var now = new Date();
	    var past = new Date(birthday);
	    var nowYear = now.getFullYear();
	    var pastYear = past.getFullYear();
	    var age = nowYear - pastYear;

	    return age;
	};


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
	        	 alert("Please Enter a valid Email Address.");
			     
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


function saveee(e){
	
	
	alert("saving");
	
	
}
function saveGeneralApplicant(e) {
	
	alert("SAVING.");
	
	   if(validateDataSecond(formObj2)){
	   alert("validating data");
	       
		}
	
	
}






function validateDataSecond(obj){
 var flag = true;
 var msgBegin = 'Mandatory field "';
 var msgEnd = '" is required';
 var msg = '';
 var f=false;
 var f1=false;
 
 //var activeCoap = obj.find('#activeCoap').is(':checked');
 obj.find('input#name').each(function(){
	  if($(this).parent().parent().attr("class")=="clrbth UCAddressesViewSubContainer" && $(this).is(':hidden') && $(this).val().trim() == ''){
		   alert("all good");
	  }else if($(this).is(':visible') && $(this).val().trim() == ''){
		  alert("fname ismissing");
	  }
	// if(activeCoap==false){return false;}
});



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