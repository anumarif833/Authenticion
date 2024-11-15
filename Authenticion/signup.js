import { auth, createUserWithEmailAndPassword } from "./firebase.js";

let signup = () => {
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log("Successfully Signed Up",user);

            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            // const errorMessage = error.message;
            console.log("Error Message",errorCode);

            // ..
        });
}

let signUp = document.getElementById("SignUp-form")
signUp.addEventListener("click", signup)








// const form = document.querySelector('#SignUp-form');
// // console.log(form);

// form.addEventListener('submit', async (event) => {
//     try {
//         event.preventDefault();
//         const email = event.target.children[0].value
//         const password = event.target.children[1].value

//         // firebase se login ka function
//         const result = await createUserWithEmailAndPassword(auth, email, password)
//         console.log(result);

//     } catch (error) {
//         console.log("my error msg :", error.message);

//     }
// });