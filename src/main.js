import {signUpUserEmailPassword,signUpUserGoogle } from '../controller/registerFirebase.js';


// Get Modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.getElementById("btn-2");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

//Registro de usuario 
const btnRegister=document.getElementById("btn-3");
const emailUser=document.getElementById("mail-creation");
const passwordUser=document.getElementById("pass-creation");
const accountGoogle=document.getElementById("google");

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
/*window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};*/

btnRegister.addEventListener('click',function(){
  signUpUserEmailPassword(emailUser,passwordUser);
  emailUser.value='';
  passwordUser.value='';
});

accountGoogle.addEventListener('click',signUpUserGoogle,false);