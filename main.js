console.log("loaded")

const game = document.querySelector(".game");
const scoreTotal = document.querySelector(".score");

const triviaCategories = [
  {
    //house in a seperate file and reference "constants.js"
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

let score = 000;
//------------------------------- Creating Columns ---------------------------
function addTitle(genre) {
  const column = document.createElement("div"); // creates column div and adds class
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
    card.setAttribute(`question-option-${index + 1}`, choice)); //sets question-option to each question
    card.setAttribute("data-correct", question.correct);
    card.setAttribute("data-value", card.getInnerHTML());

    card.addEventListener("click", showQuestion);
  });
}

triviaCategories.forEach((genre) => addTitle(genre)); // adds the function above

