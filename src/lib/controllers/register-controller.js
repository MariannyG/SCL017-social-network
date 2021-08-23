// import {addCollection, authUserWithEmailPassword, errorAuthUser, sendEmailVerification } from "../models/modelFirebase.js";
// addCollection
// const signUpUserEmailPassword = () =>{
//     const email=document.getElementById("mail-creation").value;
//     const password=document.getElementById("pass-creation").value;
//     const modalRegister=document.getElementById("myModal");
//     const form=document.getElementById("formAccCreation");
//     const message=document.getElementById("message");
//     authUserWithEmailPassword(email,password).then((newUser) => {
//         sendEmailVerification();
//         const objUser =  {
//             name : newUser.user.displayName,
//             email: newUser.user.email,
//             photoURL:'https://img.icons8.com/ios-glyphs/120/000000/user-female.png',
//         };
//         addCollection('users',newUser.user.uid,objUser);
//         modalRegister.style.display='none';
//         alert('Revisa tu correo electrónico');
//         })
//        .catch((error) => {
//         const errorCode = error.code;
//         form.reset();
//         message.innerHTML= errorAuthUser(errorCode);
//         console.log(error);
//       });
//     }

// const signUpUserGoogle = () =>{
//     signInUserGoogleAccount().then((result) => {
//     const user = result.user;
//     const docRef=firebase.firestore().collection('users').doc(user);
//     docRef.get().then((doc) => {
//       if (doc.exists) {
//           console.log("Document data:", doc.data());
//       } else {
//           // doc.data() will be undefined in this case
//           console.log("No such document!");
//           const objUser= {
//             name: user.displayName,
//             email: user.email,
//             photoURL: user.photoURL,
//       };
//       addCollection('users',user.uid,objUser)
//       .then(() => {
//         window.location.hash = '#home';
//       });
//       }
//   }).catch((error) => {
//       console.log("Error getting document:", error);
//   });
//       }).catch((error) => {
//         // Handle Errors here.
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         // The email of the user's account used.
//         const email = error.email;
//         // The firebase.auth.AuthCredential type that was used.
//         const credential = error.credential;
//         alert("Error detectado al usar la cuenta de google");
//       });
// }

// const signUpUserFacebook = () =>{
//     signInUserFacebookAccount().then((result) => {
//         const user = result.user;
//         const objUser= {
//               name: user.displayName,
//               email: user.email,
//               photoURL: user.photoURL,
//         };
//         addCollection('users',user.uid,objUser)
//         .then(() => {
//           window.location.hash = '#home';
//         });
//       })
//       .catch((error) => {
//         // Handle Errors here.
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         // The email of the user's account used.
//         const email = error.email;
//         // The firebase.auth.AuthCredential type that was used.
//         const credential = error.credential;
//         console.log(errorCode);
//         if (errorCode === 'auth/account-exists-with-different-credential') {
//           alert('La dirección de correo electrónico ya esta en uso');
//         }
//       });
// }

// export {signUpUserEmailPassword, signUpUserGoogle,signUpUserFacebook};





/*Se añadió algunos elementos para verificar que el usuario efectivamente esté registrado.Reemplazar lo anterior
por esto por favor*/

import {addCollection, authUserWithEmailPassword, errorAuthUser, sendEmailVerification, signInUserGoogleAccount, userActive } from "../models/modelFirebase.js";

const signUpUserEmailPassword = () =>{
    const email=document.getElementById("mail-creation").value;
    const password=document.getElementById("pass-creation").value;
    const userName=document.getElementById("user-creation").value;
    const modalRegister=document.getElementById("myModal");
    const form=document.getElementById("formAccCreation");
    const message=document.getElementById("message");
    authUserWithEmailPassword(email,password).then((newUser) => {
        sendEmailVerification();
        const objUser =  {
            name : userName,
            email: newUser.user.email,
            photoURL:'https://img.icons8.com/ios-glyphs/120/000000/user-female.png',
            movieView :""
        };
        addCollection('users',newUser.user.uid,objUser);
        modalRegister.style.display='none';
        alert('Revisa tu correo electrónico');
        })
       .catch((error) => {
        const errorCode = error.code;
        form.reset();
        message.innerHTML= errorAuthUser(errorCode);
        console.log(error);
      });
    }

    const signUpUserGoogle = () =>{
      signInUserGoogleAccount().then((result) => {
        const user=result.user;
        const focusEmail=document.getElementById("email");
        const focusGoogle=document.getElementById("google");
        const docRef=firebase.firestore().collection('users').doc(user.uid);
        docRef.get().then((doc) => {
          if (doc.exists) {
              alert("Esta cuenta ya se encuentra registrada ya sea mediante email y contraseña o a través de una cuenta de Google.Inicie sesión con alguna opción ofrecida.");
              focusEmail.focus();
              focusGoogle.focus();
          } else {
              // doc.data() will be undefined in this case
              const objUser= {
                name: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
                movieView :""
              }
              addCollection('users',user.uid,objUser);
              console.log("No such document!");
              window.location.hash='#home';
          }
      }).catch((error) => {
          console.log("Error getting document:", error);
      });
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        const credential = error.credential;
        alert("Error detectado al usar la cuenta de google");
      });
      }

const signUpUserFacebook = () =>{
    signInUserFacebookAccount().then((result) => {
        const user = result.user;
        const objUser= {
              name: user.displayName,
              email: user.email,
              photoURL: user.photoURL,
              movieView :""
        };
        addCollection('users',user.uid,objUser)
        .then(() => {
          window.location.hash = '#home';
        });
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        const credential = error.credential;
        console.log(errorCode);
        if (errorCode === 'auth/account-exists-with-different-credential') {
          alert('La dirección de correo electrónico ya esta en uso');
        }
      });
}


export {signUpUserEmailPassword,signUpUserGoogle,signUpUserFacebook};
