const t=document.querySelector(".modal");
var attempt = 3; 
function validate(){
   // var text;
var username = document.getElementById("email").value;
var password = document.getElementById("pass").value;
if ( username == "qq" && password == "qq"){
  t.style.transform="scale(1)";
  

}
else{
attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("email").disabled = true;
document.getElementById("pass").disabled = true;
document.getElementsByClassName("btn").disabled = true;
return false;
}
}
}