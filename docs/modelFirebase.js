// Registro de usuario e inicio de sesión de usuario mediante email y contraseña


const objErrorMessage = {
  'auth/invalid-email':'La dirección de correo electrónico no es valida.',
  'auth/email-already-in-use': 'La dirección de correo electrónico ya está en uso.O tal vez te registraste a través de tu cuenta de Google.',
  'auth/weak-password' : 'La contraseña debe tener al menos 6 caracteres.',
  'auth/wrong-password' : 'La contraseña es inválida.O tal vez te registraste a través de tu cuenta de Google.',
  'auth/user-not-found' : 'No hay registro de usuario correspondiente a este identificador.'
}

export const authUserWithEmailPassword= (email,password) => firebase.auth().createUserWithEmailAndPassword(email, password);

export const sendEmailVerification = () => firebase.auth().currentUser.sendEmailVerification();

export const loginUserWithEmailPassword = (email,password) => firebase.auth().signInWithEmailAndPassword(email, password);

export const errorAuthUser = (errorCode) => objErrorMessage[errorCode];

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

//Data de los usuarios de acuerdo a su id 
export const getDataUser = (idUser) =>firebase.firestore().collection('users').doc(idUser);

// Actualizar datos del usuario
export const updateUserData = (id,obj) => firebase.firestore().collection('users').doc(id).update(obj);

// Cerrar sesión de usuario 
export const signOutUser = () =>firebase.auth().signOut();
// Crear colección de datos
export const addCollection = (newCollection,id,object) =>firebase.firestore().collection(newCollection).doc(id).set(object);
// 
export const updateDoc = (archive,nameMovie,obj) => firebase.firestore().collection(archive).doc(nameMovie).update(obj);

// Relacionado con los comentarios 
// Añadir comentarios a cada documento de reseña de la película
export const addComments = (archive,nameMovie,obj) =>firebase.firestore().collection(archive).doc(nameMovie).collection('comments').add(obj);
// Para obtener los comentarios de la base de datos 
export const getNote = (nameMovie,callback) => firebase.firestore().collection('post').doc(nameMovie).collection('comments').orderBy('date_time','desc').limit(3).onSnapshot(callback);
// Eliminar comentarios en una reseña de película específica 
export const deleteComment =(nameMovie,idComment) =>firebase.firestore().collection('post').doc(nameMovie).collection('comments').doc(idComment).delete();
// Editar comentarios en un reseña de película específica
export const updateComment = (nameMovie, idComment, obj) => firebase.firestore().collection('post').doc(nameMovie).collection('comments')
.doc(idComment)
.update(obj);
// Observador para mostrar el estado del usuario (activo/inactivo)
export function observeStatusUser(){
  firebase.auth().onAuthStateChanged((user) => {
     if (user) { 
       console.log('Existe un usuario activo');
     } else {
       console.log('No existe un usuario activo');
     }
   });
  };

// Sección de Likes para los comentarios 

export const addLikes = (nameMovie,idComment) => firebase.firestore().collection('post').doc(nameMovie).collection('comments')
.doc(idComment)
.update({like_count : firebase.firestore.FieldValue.increment(1)});