function beforeSubmit(){
    let datePicker = document.getElementById('date-of-birth');
    let hiddentDate = document.getElementById('Date_of_Birth__c');

    let formattedDate =new Date(datePicker.value).toLocaleString("en-US");
    hiddentDate.value = formattedDate;
}

function timestamp() {
     var response = document.getElementById("g-recaptcha-response"); 
     if (response == null || response.value.trim() == "")
         {var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);
            elems["ts"] = JSON.stringify(new Date().getTime());
            document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems);
        } 
    } setInterval(timestamp, 500); 
