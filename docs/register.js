import {signInUserEmailPassword, signInUserFacebook, signInUserGoogle } from "../controllers/login-controller.js";
import {signUpUserEmailPassword, signUpUserGoogle} from "../controllers/register-controller.js";

export default()=>{
  const registerView = `
  <div id="login">
  <div class="logo">
    <img class="img-logo" src="img/logo.png">
  </div>
  <div class="text">
    <p>Comienza a compartir y leer reseñas de tus películas favoritas.</p>
  </div>
  <div class="input-style">
    <form id="form">
      <input type="text" id="email" placeholder=" ">
        <input type="password" id="password" placeholder=" ">
          <br/>
          <p id="messageLogin"></p>
           <button type="button" class="btn" id="btn">INICIAR SESIÓN</button>
    </form>
  </div>
  <div class="register-grid">
  <div class="social">
    <div class="text-signUp">
    <p>o puedes ingresar con tus cuentas de<p><br>
    </div>
    <img id="google" src="img/google.png">
    <img id="facebook" src="img/facebok.png">
    <br>
  </div>
  <div class="register">
    <h2>¿No tienes una cuenta?</h2>
    <button type="button" class="btn-2" id="btn-2">Regístrate aquí</button>
  </div>
</div>
</div>
<div id="myModal" class="modal">
  <div class="modal-content">
    <span class="close">&times;</span>
    <h3>Crear nueva cuenta</h3>
    <form id="formAccCreation">
      <input
        type="email"
        id="mail-creation"
        placeholder=" "
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
        title="Ej. usuario@abcd.com"
        required
      />
    
      <input
        type="password"
        id="pass-creation"
        placeholder=" "
        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
        title="Debe contener: 6 caracteres, al menos una mayúscula, una minúscula y un número"
        required
      />
      <p id="message"></p>
      <br />

      <button id="btn-3" class="btn">REGISTRARSE</button>
    </form>

    <div class="social-2">
      <img id="google-register" src="img/google2.png">
      <img id="facebook-register" src="img/facebook2.png">
    </div>
  </div>
</div>`;
const registerPage = document.createElement('section');
registerPage.innerHTML =registerView;
registerPage.querySelector('#btn').addEventListener('click',signInUserEmailPassword,false);
const modal=registerPage.querySelector('#myModal');
const span=registerPage.querySelector('.close');
const btn=registerPage.querySelector('#btn-2');
const btnRegister=registerPage.querySelector('#btn-3');
const accountGoogleRegister=registerPage.querySelector('#google-register');
const accountFacebookRegister=registerPage.querySelector('#facebook-register');
const accountGoogle=registerPage.querySelector('#google');
const accountFacebook=registerPage.querySelector('#facebook');

btn.addEventListener('click',() => modal.style.display='block');
span.addEventListener('click',()=> modal.style.display='none');
btnRegister.addEventListener('click',signUpUserEmailPassword,false);
accountGoogle.addEventListener('click',signInUserGoogle,false);
accountFacebook.addEventListener('click',signInUserFacebook,false);
accountGoogleRegister.addEventListener('click',signUpUserGoogle,false);

return registerPage;
}