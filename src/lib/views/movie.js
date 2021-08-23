// let globalMovie;
// export const movieMatch = (mov) => {
//   globalMovie = mov;
//   window.location.hash = "#movie";
// };

//  export const movie = () => {
//   const movieView = `<div class="sheetContainer"></div>`;
//   const moviePage = document.createElement("div");
//   moviePage.innerHTML = movieView;

//   const claseGlobal = moviePage.querySelector(".sheetContainer");
//   const newDivElement = document.createElement("div");
//   newDivElement.innerHTML = `
//    <div class="left-test">
//     <div class="img">
//       <img class="sheetImg" src="${globalMovie.imgPortada}">
//     </div>
//     <div class="info">
//       <span class="sheetGender">${globalMovie.gender}</span>
//       <span class="sheetYear">${globalMovie.year}</span>
//       <div class="Likecontainer">

//             <div class="CountLike" id="Like Count">
//           <button class="button button1">
//           <i class="fa fa-heart"></i> Like <span class="counterStat">...</span>
//           </button>
//           </div>
     
//        </div>
//     </div>
//     <div class="syn">
//       <p class="sheetTitle">Sinopsis</p>
//       <p class="sheetSyn">${globalMovie.synopsis}</p>
//      </div>
//     <div class="provider-1">
//       <p class="sheetTitle">Ver trailer y spoilers</p>
//       <a href="${globalMovie.spoilers}"><img class="logoSpoilers" src="data/imgIconos/spoilers.png"/></a>
//       <a href="${globalMovie.youtube}"><img class="logoYoutube" src="data/imgIconos/youtube.png"/></a>
//     </div>
//    </div>
//     <div class="provider-2">
//       <p class="sheetTitle">Ver ahora</p>
//       <a href="${globalMovie.cuevana}"><img class="logoCuevana" src="data/imgIconos/cuevana.png"/></a>
//       <a href="${globalMovie.netflix}"><img class="logoNetflix" src="data/imgIconos/netflix.png"/></a>
//       <a href="${globalMovie.disney}"><img class="logoDisney" src="data/imgIconos/disney.png"/></a>
//       <p class="sheetTitle">Comentarios</p>
//       <form>
//       <input type="textarea" id="commentfield" class="box" placeholder="   Añadir Comentario">
//       <button id="btnTxt">Publicar</button>
//       </form>
//     </div>
//     <div class="icon-back">
//       <a href="#home"><img class="back" src="img/back.png"/></a>
//       <span class="sheetTitle">Volver atrás</span>
//     </div>
//     `;
//     claseGlobal.appendChild(newDivElement);

// //     document.querySelector("#btnTxt").addEventListener("submit", writeNewPost, false);

// //       function writeNewPost(uid, body) {
// //         // A post entry.
// //         var postData = {
// //           author: "",
// //           uid: firebase.auth().uid,
// //           body: document.getElementById("commentfield").value,
          
// //         };
// //       }

  



/*Se llama a la data del usuario específico para obtener el nombre de la película clickeada que está almacenada
en el elemento movieView del objeto del usuario y se manda a viewMovie que tiene la estructura de la reseña de la
película*/

import { viewMovie } from "./viewMovie.js";

export default ()=>{
  const movieView = `<div class="sheetContainer"></div>`;
  const moviePage = document.createElement("div");
  moviePage.innerHTML = movieView;
  const sheetContainer=moviePage.querySelector('.sheetContainer');
  firebase.auth().onAuthStateChanged((user) => {
    if (user) { 
      const uid = user.uid;
      const docUser=  firebase.firestore().collection('users').doc(uid);
      docUser.get().then(async(doc) => {
        if (doc.exists) {
            console.log("Document data:", doc.data());
            console.log(doc.data().movieView);
            sheetContainer.appendChild(await viewMovie(doc.data().movieView));
            /*var docRef = firebase.firestore().collection("post").doc(doc.data().movieView);
  docRef.get().then((doc) => {
      if (doc.exists) {
          sheetContainer.innerHTML="";
          console.log("Document data:", doc.data());
          sheetContainer.appendChild(viewMovie(doc.data()))
      } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
      }
  }).catch((error) => {
      console.log("Error getting document:", error);
  });*/
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    
    });

    }
});
   
return moviePage; 

 }
   
   

 



//     const dCounters = document.querySelectorAll('.CountLike');
// [].forEach.call(dCounters, function(dCounter) {
//   const el = dCounter.querySelector('button');
//   const cId = dCounter.id;
//   const dDatabase = firebase.database().ref('Like Number Counter').child(cId);

//   // get firebase data
//   dDatabase.on('value', function(snap) {
//       const data = snap.val() || 0;
//       dCounter.querySelector('span').innerHTML = data;
//   });

//   // set firebase data
//   el.addEventListener('click', function() {
//       dDatabase.transaction(function(dCount) {          
//           return (dCount || 0) + 1;
//       });
//   });
 
// });
    
//   return moviePage;
// };
