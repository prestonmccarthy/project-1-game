console.log("loaded")

const mainGame = document.querySelector(".main-game");
const totalScore = document.querySelector(".total")

const triviaCategories = [
    {
      //house in a seperate file and reference "constants.js"
      genre: "NUMBERS GAME",
      questions: [
        {
            question: `Question Text`,
            choices: ["Option1", "Option2", "Option3", "Option4"],
            correct: "Correct Answer",
            rank: 200,
        },
        {
            question: `Question Text`,
            choices: ["Option1", "Option2", "Option3", "Option4"],
            correct: "Correct Answer",
            rank: 400,
        },
        {
            question: `Question Text`,
            choices: ["Option1", "Option2", "Option3", "Option4"],
            correct: "Correct Answer",
            rank: 600,
        },
        {
            question: `Question Text`,
            choices: ["Option1", "Option2", "Option3", "Option4"],
            correct: "Correct Answer",
            rank: 800,
        },
        {
            question: `Question Text`,
            choices: ["Option1", "Option2", "Option3", "Option4"],
            correct: "Correct Answer",
            rank: 1000,
        },
      ],
    },
    {
      genre: "TYPES",
      questions: [
        {
            question: `Preston Test`,
            choices: ["Option1", "Test2", "Option3", "Test4"],
            correct: "Test2",
            rank: 200,
        },
        {
            question: `Question Text`,
            choices: ["Option1", "Option2", "Option3", "Option4"],
            correct: "Correct Answer",
            rank: 400,
        },
        {
            question: `Question Text`,
            choices: ["Option1", "Option2", "Option3", "Option4"],
            correct: "Correct Answer",
            rank: 600,
        },
        {
            question: `Question Text`,
            choices: ["Option1", "Option2", "Option3", "Option4"],
            correct: "Correct Answer",
            rank: 800,
        },
        {
            question: `Question Text`,
            choices: ["Option1", "Option2", "Option3", "Option4"],
            correct: "Correct Answer",
            rank: 1000,
        },
      ],
    },
    {
      genre: "GAME TIME",
      questions: [
        {
            question: `Question Text`,
            choices: ["Option1", "Option2", "Option3", "Option4"],
            correct: "Correct Answer",
            rank: 200,
        },
        {
            question: `Question Text`,
            choices: ["Option1", "Option2", "Option3", "Option4"],
            correct: "Correct Answer",
            rank: 400,
        },
        {
            question: `Question Text`,
            choices: ["Option1", "Option2", "Option3", "Option4"],
            correct: "Correct Answer",
            rank: 600,
        },
        {
            question: `Question Text`,
            choices: ["Option1", "Option2", "Option3", "Option4"],
            correct: "Correct Answer",
            rank: 800,
        },
        {
            question: `Question Text`,
            choices: ["Option1", "Option2", "Option3", "Option4"],
            correct: "Correct Answer",
            rank: 1000,
        },
      ],
    },
    {
      genre: "EEVEE-LUTIONS",
      questions: [
        {
            question: `Question Text`,
            choices: ["Option1", "Option2", "Option3", "Option4"],
            correct: "Correct Answer",
            rank: 200,
        },
        {
            question: `Question Text`,
            choices: ["Option1", "Option2", "Option3", "Option4"],
            correct: "Correct Answer",
            rank: 400,
        },
        {
            question: `Question Text`,
            choices: ["Option1", "Option2", "Option3", "Option4"],
            correct: "Correct Answer",
            rank: 600,
        },
        {
            question: `Question Text`,
            choices: ["Option1", "Option2", "Option3", "Option4"],
            correct: "Correct Answer",
            rank: 800,
        },
        {
            question: `Question Text`,
            choices: ["Option1", "Option2", "Option3", "Option4"],
            correct: "Correct Answer",
            rank: 1000,
        },
      ],
    },
    {
      genre: "CHAMPIONS",
      questions: [
        {
            question: `Question Text`,
            choices: ["Option1", "Option2", "Option3", "Option4"],
            correct: "Correct Answer",
            rank: 200,
        },
        {
            question: `Question Text`,
            choices: ["Option1", "Option2", "Option3", "Option4"],
            correct: "Correct Answer",
            rank: 400,
        },
        {
            question: `Question Text`,
            choices: ["Option1", "Option2", "Option3", "Option4"],
            correct: "Correct Answer",
            rank: 600,
        },
        {
            question: `Question Text`,
            choices: ["Option1", "Option2", "Option3", "Option4"],
            correct: "Correct Answer",
            rank: 800,
        },
        {
            question: `Question Text`,
            choices: ["Option1", "Option2", "Option3", "Option4"],
            correct: "Correct Answer",
            rank: 1000,
        },
      ],
    },
    {
      genre: "ANIME",
      questions: [
        {
            question: `Question Text`,
            choices: ["Option1", "Option2", "Option3", "Option4"],
            correct: "Correct Answer",
            rank: 200,
        },
        {
            question: `Question Text`,
            choices: ["Option1", "Option2", "Option3", "Option4"],
            correct: "Correct Answer",
            rank: 400,
        },
        {
            question: `Question Text`,
            choices: ["Option1", "Option2", "Option3", "Option4"],
            correct: "Correct Answer",
            rank: 600,
        },
        {
            question: `Question Text`,
            choices: ["Option1", "Option2", "Option3", "Option4"],
            correct: "Correct Answer",
            rank: 800,
        },
        {
            question: `Question Text`,
            choices: ["Option1", "Option2", "Option3", "Option4"],
            correct: "Correct Answer",
            rank: 1000,
        },
      ],
    },
  ];
  


let total = 0;
