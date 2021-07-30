// Registro de usuario y inicio de sesión de usuario mediante email y contraseña

export const authUserWithEmailPassword= (email,password) => firebase.auth().createUserWithEmailAndPassword(email, password);

export const sendEmailVerification = () => firebase.auth().currentUser.sendEmailVerification();

export const loginUserWithEmailPassword = (email,password) => firebase.auth().signInWithEmailAndPassword(email, password);

// Creación de instancia del objeto del proveedor de Google

export const signInUserGoogleAccount = () =>{
    const providerGoogle = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(providerGoogle);
};

// Creación de instancia del objeto del proveedor de Facebook

export const signInUserFacebookAccount = () =>{
    const providerFacebook = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithPopup(providerFacebook);
}

// Obtención del usuario con sesión activa

export const userActive = () =>firebase.auth().currentUser;

// Observador para mostrar el estado del usuario (activo/inactivo)

export const observeStatusUser = () =>{
    firebase.auth().onAuthStateChanged((user) => {
       if (user) { 
         const displayName = user.displayName;
         const email = user.email;
         const photoURL = user.photoURL;
         const emailVerified = user.emailVerified; 
         const uid = user.uid;
        console.log(emailVerified);
        console.log('Existe un usuario activo');
       } else {
         console.log('No existe un usuario activo');
       }
     });
    };

// Cerrar sesión de usuario 
export const signOutUser = () =>firebase.auth().signOut();

