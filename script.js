let captchaChecked = false;



function beforeSubmit(event){
   if(captchaChecked){ let datePicker = document.getElementById('date-of-birth');
    let hiddentDate = document.getElementById('Date_of_Birth__c');

    let formattedDate =new Date(datePicker.value).toLocaleString("en-US");
    hiddentDate.value = formattedDate;}
    else{
        alert('Please check the reCAPTCHA');
        event.preventDefault();
    }
}

function timestamp() {
     var response = document.getElementById("g-recaptcha-response"); 
     if (response == null || response.value.trim() == "")
         {var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);
            elems["ts"] = JSON.stringify(new Date().getTime());
            document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems);
        } 
    } setInterval(timestamp, 500); 


    function captchaSuccess(){
        captchaChecked = true;
    }