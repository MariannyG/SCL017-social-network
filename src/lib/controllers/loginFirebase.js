const loginUserEmailPassword=()=>{
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
    const user = userCredential.user;
     })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode,errorMessage);
    });
}

export default loginUserEmailPassword;
