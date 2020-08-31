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
