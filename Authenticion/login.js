import { auth,  signInWithEmailAndPassword } from "./firebase.js";

let logIn = () => {
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log("Successfully Logged In",user);

            // ...
        })
        .catch((error) => {
            // const errorCode = error.code;
            const errorMessage = error.message;
            console.log("Error Message",errorMessage);

            // ..
        });
}

let login = document.getElementById("login-form");
login.addEventListener("click",logIn);