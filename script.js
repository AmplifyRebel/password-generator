var password=document.getElementById("password");
 function genPassword(click) {
    var userInput = prompt("How long do you want your password (8-128)");
    var compOptions = [""];
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var passwordLength= userInput
    var password = "";
    for (var i = 0; i <= passwordLength; i++) {
      var randomNumber = Math.floor(Math.random() * chars.length);
      password += chars.substring(randomNumber, randomNumber +1);
     }
           document.getElementById("password").value = password;
    }
 genPassword()