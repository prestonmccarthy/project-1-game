console.log("loaded")
// --------------------------Global Objects Defined--------------------------

const game = document.querySelector(".game");
const scoreTotal = document.querySelector(".score");
let score = 0;
let modalContainer = document.querySelector(".modal-container");
let modalInside = document.querySelector(".modal-inside");
let attempts = 30; 

const triviaCategories = [
  {
    category: "NUMBERS GAME",
    questions: [
      {
        question: `Question`,
        choices: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
        correct: "Answer 1",
        points: 200,
      },
      {
        question: `Question`,
        choices: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
        correct: "Answer 1",
        points: 400,
      },
      {
        question: `Question`,
        choices: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
        correct: "Answer 1",
        points: 600,
      },
      {
        question: `Question`,
        choices: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
        correct: "Answer 1",
        points: 800,
      },
      {
        question: `Question`,
        choices: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
        correct: "Answer 1",
        points: 1000,
      },
    ],
  },
  {
    category: "TYPES",
    questions: [
      {
        question: `Question`,
        choices: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
        correct: "Answer 1",
        points: 200,
      },
      {
        question: `Question`,
        choices: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
        correct: "Answer 1",
        points: 400,
      },
      {
        question: `Question`,
        choices: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
        correct: "Answer 1",
        points: 600,
      },
      {
        question: `Question`,
        choices: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
        correct: "Answer 1",
        points: 800,
      },
      {
        question: `Question`,
        choices: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
        correct: "Answer 1",
        points: 1000,
      },
    ],
  },
  {
    category: "GAME TIME",
    questions: [
      {
        question: `Question`,
        choices: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
        correct: "Answer 1",
        points: 200,
      },
      {
        question: `Question`,
        choices: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
        correct: "Answer 1",
        points: 400,
      },
      {
        question: `Question`,
        choices: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
        correct: "Answer 1",
        points: 600,
      },
      {
        question: `Question`,
        choices: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
        correct: "Answer 1",
        points: 800,
      },
      {
        question: `Question`,
        choices: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
        correct: "Answer 1",
        points: 1000,
      },
    ],
  },
  {
    category: "EEVEE-LUTIONS",
    questions: [
      {
        question: `Question`,
        choices: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
        correct: "Answer 1",
        points: 200,
      },
      {
        question: `Question`,
        choices: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
        correct: "Answer 1",
        points: 400,
      },
      {
        question: `Question`,
        choices: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
        correct: "Answer 1",
        points: 600,
      },
      {
        question: `Question`,
        choices: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
        correct: "Answer 1",
        points: 800,
      },
      {
        question: `Question`,
        choices: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
        correct: "Answer 1",
        points: 1000,
      },
    ],
  },
  {
    category: "CHAMPIONS",
    questions: [
      {
        question: `Question`,
        choices: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
        correct: "Answer 1",
        points: 200,
      },
      {
        question: `Question`,
        choices: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
        correct: "Answer 1",
        points: 400,
      },
      {
        question: `Question`,
        choices: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
        correct: "Answer 1",
        points: 600,
      },
      {
        question: `Question`,
        choices: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
        correct: "Answer 1",
        points: 800,
      },
      {
        question: `Question`,
        choices: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
        correct: "Answer 1",
        points: 1000,
      },
    ],
  },
  {
    category: "ANIME",
    questions: [
      {
        question: `Question`,
        choices: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
        correct: "Answer 1",
        points: 200,
      },
      {
        question: `Question`,
        choices: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
        correct: "Answer 1",
        points: 400,
      },
      {
        question: `Question`,
        choices: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
        correct: "Answer 1",
        points: 600,
      },
      {
        question: `Question`,
        choices: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
        correct: "Answer 1",
        points: 800,
      },
      {
        question: `Question`,
        choices: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
        correct: "Answer 1",
        points: 1000,
      },
    ],
  },
];

console.log(triviaCategories)

// --------------------------Global Objects Defined--------------------------

// ----------Function to remove modal after question is answered-------------

function toggleModal() {
  modalContainer.classList.add("hidden");
}

// ----------Function to remove modal after question is answered-------------

// --------------------------Select and Display Question Functions--------------------------

function showQuestion(event) {
    attempts--;
    this.innerText = " "; 
    
    const questionDisplay = document.createElement("div");
    questionDisplay.classList.add("card-text"); 
    questionDisplay.innerText = this.getAttribute("question-question"); 
  
    const optionOne = document.createElement("button"); 
    const optionTwo = document.createElement("button");
    const optionThree = document.createElement("button");
    const optionFour = document.createElement("button");
  
    optionOne.classList.add("option-one"); 
    optionTwo.classList.add("option-two");
    optionThree.classList.add("option-three");
    optionFour.classList.add("option-four");
  
    optionOne.innerText = this.getAttribute("question-option-1"); 
    optionTwo.innerText = this.getAttribute("question-option-2");
    optionThree.innerText = this.getAttribute("question-option-3");
    optionFour.innerText = this.getAttribute("question-option-4");
  
    optionOne.addEventListener("click", getAnswer); 
    optionTwo.addEventListener("click", getAnswer);
    optionThree.addEventListener("click", getAnswer);
    optionFour.addEventListener("click", getAnswer);
  
    optionOne.addEventListener("click", toggleModal); 
    optionTwo.addEventListener("click", toggleModal);
    optionThree.addEventListener("click", toggleModal);
    optionFour.addEventListener("click", toggleModal);
  
    modalInside.innerText = ""; 
    modalInside.dataset.correct = this.getAttribute("data-correct");
    modalInside.dataset.value = this.getAttribute("data-value");
    modalInside.append(questionDisplay, optionOne, optionTwo, optionThree, optionFour); 
    modalContainer.classList.remove("hidden"); 
  
    const myCards = Array.from(document.querySelectorAll(".card")); 
    myCards.forEach((card) => card.removeEventListener("click", showQuestion));
    event.target.children.length = 0;
}

console.log(showQuestion)
  
function addTitle(genre) {
  const column = document.createElement("div");
  column.classList.add("title-column");

  const titleTitle = document.createElement("div");
  titleTitle.classList.add("title-title");
  titleTitle.innerText = genre.category;

  column.appendChild(titleTitle);
  game.append(column);

  genre.questions.forEach((question) => {
    const card = document.createElement("div");
    card.classList.add("card");
    column.appendChild(card);
    card.innerText = question.points;

    card.setAttribute("question-question", question.question);
    question.choices.forEach((choice, index) =>
    card.setAttribute(`question-option-${index + 1}`, choice));
    card.setAttribute("data-correct", question.correct);
    card.setAttribute("data-value", card.getInnerHTML());

    card.addEventListener("click", showQuestion);
  });
}

triviaCategories.forEach((genre) => addTitle(genre));

console.log(addTitle)

// --------------------------Select and Display Question Functions--------------------------

// -------------Select Answer and Add or Subtract Score with Final Score Alerts-------------
function getAnswer() {
    const allCards = Array.from(document.querySelectorAll(".card"));
    allCards.forEach((card) => {
      if (card.innerText !== "") {
        card.addEventListener("click", showQuestion);
      } else {
        card.classList.add("emptyCard");
      }
    });
  
    const cardOfButton = modalInside;

    if (cardOfButton.getAttribute("data-correct") === this.innerText) {
      score = score + parseInt(cardOfButton.getAttribute("data-value"));
      if (score < 0) {
        scoreTotal.style.color = "red";
      } else {
        scoreTotal.style.color = "whitesmoke";
      }
      scoreTotal.innerText = `Score: ${score}`;
    } else if (cardOfButton.getAttribute("data-correct") != this.innerText) {
      score = score - parseInt(cardOfButton.getAttribute("data-value"));
      if (score < 0) {
        scoreTotal.style.color = "red";
      }
      scoreTotal.innerText = `Score: ${score}`;
    }
    cardOfButton.removeEventListener("click", showQuestion);
  
    if (attempts === 0) {
      if (score < 0) {
        alert(
          "The world of Pokemon might not be right for you."
        );
      } else if (score < 5000) {
        alert(
          "Keep training, you're not quite ready to face the Pokemon League."
        );
      } else if (score < 10000) {
        alert(
          "Great work, but you still have a little work to do if you want to become Champion!"
        );
      } else {
        alert(
          "Congratulations! You're the new Pokémon League Champion!"
        );
      }
    }
  }

  console.log(getAnswer)

// -------------Select Answer and Add or Subtract Score with Final Score Alerts-------------