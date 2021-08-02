import register from './lib/views/Register.js';
import {signUpUserEmailPassword,signUpUserGoogle, signUpUserFacebook } from './lib/controllers/registerFirebase.js';
import loginUserEmailPassword from './lib/controllers/loginFirebase.js';
import {changePath, changeView } from './lib/controllers/route.js';

window.addEventListener('hashchange',()=>changeView(window.location.hash));
window.addEventListener('popstate',()=>changePath(window.location.pathname));
document.getElementById("root").appendChild(register());
const btnLogin= document.getElementById("btn")
const accountGoogleRegister=document.getElementById("google-register")
const accountFacebookRegister=document.getElementById("facebook-register")


btnLogin.addEventListener('click',loginUserEmailPassword,false);
accountGoogleRegister.addEventListener('click',signUpUserGoogle,false);
accountFacebookRegister.addEventListener('click',signUpUserFacebook,false);



// Get Modal
const modal = document.getElementById("myModal");
// Get the button that opens the modal
const btn = document.getElementById("btn-2");
// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];
//User register
const btnRegister=document.getElementById("btn-3");
const emailUser=document.getElementById("mail-creation");
const passwordUser=document.getElementById("pass-creation");
const accountGoogle=document.getElementById("google");
const accountFacebook=document.getElementById("facebook")
// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};
btnRegister.addEventListener('click',function(){
  signUpUserEmailPassword(emailUser,passwordUser);
  emailUser.value='';
  passwordUser.value='';
});

accountGoogle.addEventListener('click',signUpUserGoogle,false);
accountFacebook.addEventListener('click',signUpUserFacebook,false);

