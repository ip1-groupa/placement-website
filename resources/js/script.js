/* function toggleAlert(){
    var alertSuccess = document.getElementById('alert-success');
    var displaySetting = alertSuccess.style.display;
    var sendButton = document.getElementById('sendButton');

    if (displaySetting === 'none') {
      alertSuccess.style.display = 'block';
      sendButton.innerHTML = 'Send';
    }
    else if (displaySetting === 'block'){
      alertSuccess.style.display = 'none';
      sendButton.innerHTML = 'Send another email';
    }
  }
  */
 function toggleAlert(){
     var alertSuccess = document.getElementById("alert-success");

     if (alertSuccess.style.display === "none") {
         alertSuccess.style.display = "block";
     } else {
         alertSuccess.style.display = "none";
     }
 }