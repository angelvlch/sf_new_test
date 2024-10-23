function beforeSubmit(){
    let datePicker = document.getElementById('date-of-birth');
    let hiddentDate = document.getElementById('Date_of_Birth__c');

    let formattedDate =new Date(datePicker.value).toLocaleString("en-US");
    hiddentDate.value = formattedDate;
}