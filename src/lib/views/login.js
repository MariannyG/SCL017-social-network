const register = ()=>{
  const registerPage = `  
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
           <button type="button" class="btn" id="btn">INICIAR SESIÓN</button>
    </form>
  </div>
  <div class="register-grid">
  <div class="social">
    <div class="text-signUp">
    <p>O bien ingresa con <p><br>
    </div>
    <img id="twiter-register" src="img/twitter.png">
    <img id="google-register" src="img/google.png">
    <img id="facebook-register" src="img/facebok.png">
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
      <br />

      <input
        type="password"
        id="pass-creation"
        placeholder=" "
        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
        title="Debe contener: 6 caracteres, al menos una mayúscula, una minúscula y un número"
        required
      />

      <br />

      <button id="btn-3" class="btn">REGISTRARSE</button>
    </form>

    <div class="social-2">
      <img id="twitter" src="img/twitter2.png">
      <img id="google" src="img/google2.png">
      <img id="facebook" src="img/facebook2.png">
    </div>
  </div>
</div>
`;
const registerView = document.createElement('section');
registerView.innerHTML =registerPage;
return registerView;
}
export default register;