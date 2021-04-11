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

var firebaseConfig = {
  apiKey: "AIzaSyCR5ZwXAjWfft2QgqJfbREISonxYsftTbs",
  authDomain: "habits-4ad0c.firebaseapp.com",
  projectId: "habits-4ad0c",
  storageBucket: "habits-4ad0c.appspot.com",
  messagingSenderId: "588630235509",
  appId: "1:588630235509:web:213a6b2c7b47612662db3c",
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);

function callGoogleSignIn() {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(function (result) {
      console.log("i ran");
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
    })
    .catch(function (error) {
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

function signOut() {
  // [START auth_sign_out]
  firebase
    .auth()
    .signOut()
    .then(() => {
      // Sign-out successful.
      console.log("sign out successful");
    })
    .catch((error) => {
      // An error happened.
    });
  // [END auth_sign_out]
}

// firebase.initializeApp(firebaseConfig)
// const txtEmail= document.getElementById("txtEmail")
// const txtPassword= document.getElementById("txtPassword")
const btnLogin = document.getElementById("btnLogin");
// const btnSignup= document.getElementById("btnSignup")
const btnSignOut = document.getElementById("btnSignOut");

btnLogin.addEventListener("click", function () {
  callGoogleSignIn();
});

btnSignOut.addEventListener("click", function () {
  signOut();
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
});

let write = document.getElementById("write");

var database = firebase.database();

function writeUserData(something) {
  firebase
    .database()
    .child()
    .ref("users/" + something)
    .set({
      username: something,
    });
}

write.addEventListener("click", writeUserData("dfsjfslfjl"));
