//Modificación de la vista home: Se añade dos funciones, movieData que se encarga de actualizar la data de los
// documentos en la database de firebase para usarlo más adelante .La función visitMovie se encarga de capturar
//el dataset.name de la película clickeada

import pelicula from "../../data/pelicula.js";
import {createSetMovie, movieData} from "../controllers/movie-controller.js";
import { visitMovie } from "../controllers/movie-controller.js";

export default ()=>{
    const homeView=`<div id="home" class="home">
    <div class="one"><img class="img-logo2" src="img/logo.png"></div>
    <div class ="two">
      <section class="carousel">
        <ul>
        <li><img src="data/imgPortada/ava.jpg" alt=""></li>
        <li><img src="data/imgPortada/blackWidow.jpg" alt=""></li>
        <li><img src="data/imgPortada/bloodRedSky.jpg" alt=""></li>
        <li><img src="data/imgPortada/fearStreetPartThree.jpg" alt=""></li>
        <li><img src="data/imgPortada/girlNext.jpg" alt=""></li>
        <li><img src="data/imgPortada/howibecameasuperhero.jpg" alt=""></li>
        <li><img src="data/imgPortada/jolt.png" alt=""></li>
        <li><img src="data/imgPortada/laManoDelDemonio.jpg" alt=""></li>
        <li><img src="data/imgPortada/oxygen.jpg" alt=""></li>
        <li><img src="data/imgPortada/thepParamedic.jpg" alt=""></li>
        <li><img src="data/imgPortada/thunderForce.jpeg" alt=""></li>
        <li><img src="data/imgPortada/unidos.jpg" alt=""></li>
        </ul>
      </section>
    </div>
    <div class="four">
      <section class="category-1">
        <p class="category-text">Terror</p>
        <p class="showAll">Ver todo</p>
        <div id="imgTerror" class=viewMovie></div>        
      </section>
    </div>
    <div class="six">
       <section class="category-2">
        <p class="category-text">Acción</p>
        <p class="showAll">Ver todo</p>
        <div id="imgAccion" class=viewMovie></div>   
      </section>
    </div>
    <div class="eight">
      <section class="category-3">
        <p class="category-text">Suspenso</p>
        <p class="showAll">Ver todo</p>
        <div id="imgSuspenso" class=viewMovie></div> 
      </section>
    </div>
    <div class="ten">  
      <section class="category-4">
        <p class="category-text">Comedia</p>
        <p class="showAll">Ver todo</p>
        <div id="imgComedia" class=viewMovie></div> 
      </section>
    </div>  
  <nav>
    <div id=navBar >
      <div class="three"><a href="#home"><img src="img/home.png"/></a><span class="texto">Inicio</span></div>
      <div class="five"><a href="#profile"><img src="img/profile.png"/></a><span class="texto">Perfil</span></br></div>
      <div class="seven" style="display:none"></div>
      <div class="movie-category">
      <p id="categories">CATEGORÍAS</p></br>
      <span>Terror</span></br>
      <span>Acción</span></br>
      <span>Suspenso</span></br>
      <span>Comedia</span></br>
      </div>
      <div class="nine"><a href="#"><img src="img/logout.png"/></a><span align="center" class="texto">Salir</span></div>
    </div>
  </nav>
    </div>`;

    const homePage=document.createElement('div');
    homePage.innerHTML=homeView;

    const dataMovie = pelicula.pelicula;
    const viewTerror = homePage.querySelector("#imgTerror");
    const viewAccion = homePage.querySelector("#imgAccion");
    const viewSuspenso = homePage.querySelector("#imgSuspenso");
    const viewComedia = homePage.querySelector("#imgComedia");

    createSetMovie(dataMovie,"Terror",viewTerror,movieData);
    createSetMovie(dataMovie,"Acción",viewAccion,movieData);
    createSetMovie(dataMovie,"Suspenso",viewSuspenso,movieData);
    createSetMovie(dataMovie,"Comedia",viewComedia,movieData);

    const genderMovie=homePage.querySelectorAll('.imgHome');
    genderMovie.forEach(movie => movie.addEventListener('click',visitMovie));

    return homePage;
}



  