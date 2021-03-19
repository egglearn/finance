const container = document.querySelector(".container");
const boxOne = document.querySelector(".one");
const answerOne = document.querySelector(".answer-one");
let clickedOne = false;

const boxTwo = document.querySelector(".two");
const answerTwo = document.querySelector(".answer-two");
let clickedTwo = false;

const boxThree = document.querySelector(".three");
const answerThree = document.querySelector(".answer-three");
let clickedThree = false;

const boxFour = document.querySelector(".four");
const answerFour = document.querySelector(".answer-four");
let clickedFour = false;


var provider = new firebase.auth.GoogleAuthProvider();



console.log(provider)
const firebaseConfig = {
  apiKey: "AIzaSyA1lDkpF-cthoatQgovVaxAgtSB2HwdouE",
  authDomain: "practice-project-20e97.firebaseapp.com",
  projectId: "practice-project-20e97",
  storageBucket: "practice-project-20e97.appspot.com",
  messagingSenderId: "457494582494",
  appId: "1:457494582494:web:d8568fb27ab2c26df01e4f"
};

firebase.initializeApp(firebaseConfig);



function signInRedirect(provider) {
  // [START auth_signin_redirect]
  firebase.auth().signInWithRedirect(provider);
  // [END auth_signin_redirect]
}






function callGoogleSignIn(){
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function(result) {
       // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
       // The signed-in user info.
       var user = result.user;
       // ...
 }).catch(function(error) {
     // Handle Errors here.
       var errorCode = error.code;
       var errorMessage = error.message;
       // The email of the user's account used.
       var email = error.email;
       // The firebase.auth.AuthCredential type that was used.
       var credential = error.credential;
    // ...
 });
}



















firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    console.log("dlfkjslgjd;glksaj;glsj")
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });


    // [START auth_google_signin_popup]
    firebase.auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;
  
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
      }).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
    // [END auth_google_signin_popup]




























// firebase.initializeApp(firebaseConfig)
// const txtEmail= document.getElementById("txtEmail")
// const txtPassword= document.getElementById("txtPassword")
const btnLogin= document.getElementById("btnLogin")
// const btnSignup= document.getElementById("btnSignup")
// const btnLogout= document.getElementById("btnLogout")

btnLogin.addEventListener("click",function(){
callGoogleSignIn()
  });








// signInRedirect()
//  console.log("dsjeomog")
// })
// btnLogin.addEventListener("click", e=>{
//   const email = txtEmail.value
//   const pass = txtPassword.value
//   const auth = firebase.auth()

//   const promise = auth.signInWithEmailAndPassword(email,pass)
// promise.catch(e=> console.log(e.message))

// })




function tester(event) {
  console.log(document.getElementById("a").value);
}
tester();

answerOne.addEventListener("click", function () {
  if (!clickedOne) {
    const displayAnswerOne = document.createElement("div");
    displayAnswerOne.innerText =
      "The S&P is a stock market index that measures the stock performance of 500 large companies listed on stock exchanges in the United States.";
    boxOne.appendChild(displayAnswerOne);
    clickedOne = true;
  }
});

answerTwo.addEventListener("click", function () {
  if (!clickedTwo) {
    const displayAnswerTwo = document.createElement("div");
    displayAnswerTwo.innerText =
      "The lifetime Isa (LISA) is a tax-free savings or investments account designed to help those aged 18-39 buy their first home or save for retirement.";
    boxTwo.appendChild(displayAnswerTwo);
    clickedTwo = true;
  }
});

answerThree.addEventListener("click", function () {
  if (!clickedThree) {
    const displayAnswerThree = document.createElement("div");
    displayAnswerThree.innerText = "annual percentage rate";
    boxThree.appendChild(displayAnswerThree);
    clickedThree = true;
  }
});

answerFour.addEventListener("click", function () {
  if (!clickedFour) {
    const displayAnswerFour = document.createElement("div");
    displayAnswerFour.innerText =
      "The Bank of England use interest rates and influencing the money supply to implement this policy.- Monetary Policy. Fiscal policy is the attempt to influence the level of economic activity through changing taxation and government spending.";
    boxFour.appendChild(displayAnswerFour);
    clickedFour = true;
  }
})
