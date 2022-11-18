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
        question: `This Pokémon, the face of the franchise, is #25 in the Pokédex.`,
        choices: ["Jigglypuff", "Sandshrew", "Pikachu", "Raticate"],
        correct: "Pikachu",
        points: 200,
      },
      {
        question: `This Three-headed Flying-type Pokémon ranks at #85.`,
        choices: ["Dugtrio", "Dodrio", "Fearow", "Articuno"],
        correct: "Dodrio",
        points: 400,
      },
      {
        question: `This Ghost-type Pokémon is #93 and can only evolve when traded to another player.`,
        choices: ["Machoke", "Haunter", "Shedinja", "Sableye"],
        correct: "Haunter",
        points: 600,
      },
      {
        question: `Pokémon #143 is known as this sleeping giant that only awakens with the help of the Poké Flute.`,
        choices: ["Kangaskhan", "Snorlax", "Magmar", "Jynx"],
        correct: "Snorlax",
        points: 800,
      },
      {
        question: `Pokémon #151 is this Pokémon which cannot be naturally captured in the first games (Red/Blue).`,
        choices: ["Mewtwo", "Dratini", "Moltres", "Mew"],
        correct: "Mew",
        points: 1000,
      },
    ],
  },
  {
    category: "TYPES",
    questions: [
      {
        question: `The most recently released typing in Pokémon is this.`,
        choices: ["Poison", "Dark", "Fairy", "Steel"],
        correct: "Fairy",
        points: 200,
      },
      {
        question: `Bug-type Pokémon are weak to Flying-type and this type of attacks.`,
        choices: ["Dark", "Psychic", "Fighting", "Fire"],
        correct: "Fire",
        points: 400,
      },
      {
        question: `Venasaur, Venonat, and Arbok all share this type.`,
        choices: ["Flying", "Poison", "Bug", "Grass"],
        correct: "Poison",
        points: 600,
      },
      {
        question: `This starter Pokémon from Red/Blue is the only starter that does not have two types by its final evolution.`,
        choices: ["Squirtle", "Pikachu", "Bulbasaur", "Charmander"],
        correct: "Squirtle",
        points: 800,
      },
      {
        question: `Fairy-type Pokémon are weak to Poison and this type.`,
        choices: ["Steel", "Fighting", "Psychic", "Dark"],
        correct: "Steel",
        points: 1000,
      },
    ],
  },
  {
    category: "GAME TIME",
    questions: [
      {
        question: `What is the first game where the player can catch Charmander, Bulbasaur, and Squirtle without trading?`,
        choices: ["Leaf Green", "Blue", "Red", "Yellow"],
        correct: "Yellow",
        points: 200,
      },
      {
        question: `In which games do the running shoes first make an appearance?`,
        choices: ["Gold/Silver", "Red/Blue", "Ruby/Sapphire", "Black/White"],
        correct: "Gold/Silver",
        points: 400,
      },
      {
        question: `Lieutenant Surge is the gym leader of this city.`,
        choices: ["Saffron City", "Vermillion City", "Celadon City", "Viridian City"],
        correct: "Vermillion City",
        points: 600,
      },
      {
        question: `Mewtwo is first encountered in this cave after defeating the Pokémon League in Red/Blue.`,
        choices: ["Victory Road", "Mt. Moon", "Cerulean Cave", "Diglett's Cave"],
        correct: "Cerulean Cave",
        points: 800,
      },
      {
        question: `This game, from the first series was released in Japan, but not the USA.`,
        choices: ["Red", "Blue", "Green", "Yellow"],
        correct: "Green",
        points: 1000,
      },
    ],
  },
  {
    category: "EEVEE-LUTIONS",
    questions: [
      {
        question: `This Pokémon evolves from Eevee after being given a water stone.`,
        choices: ["Umbreon", "Jolteon", "Vaporeon", "Glaceon"],
        correct: "Vaporeon",
        points: 200,
      },
      {
        question: `How many total Eevee-lutions are there currently?`,
        choices: ["4", "6", "10", "8"],
        correct: "8",
        points: 400,
      },
      {
        question: `Flareon, Vaporeon, and Jolteon were all released in these games.`,
        choices: ["Red/Blue", "Gold/Silver", "Ruby/Sapphire", "Diamond/Pearl"],
        correct: "Red/Blue",
        points: 600,
      },
      {
        question: `Eevee evolves into this Pokémon by raising friendship with its trainer in the day time.`,
        choices: ["Umbreon", "Leafeon", "Sylveon", "Espeon"],
        correct: "Espeon",
        points: 800,
      },
      {
        question: `This Pokémon is the most recently released evolution of Eevee.`,
        choices: ["Leafeon", "Glaceon", "Sylveon", "Espeon"],
        correct: "Sylveon",
        points: 1000,
      },
    ],
  },
  {
    category: "CHAMPIONS",
    questions: [
      {
        question: `This dragon-type trainer is the Johto Pokémon League Champion in Pokémon Gold & Silver.`,
        choices: ["Drayden", "Clair", "Iris", "Lance"],
        correct: "Lance",
        points: 200,
      },
      {
        question: `In which game(s) does the Pokémon League Champion specialize in Steel-type Pokémon?`,
        choices: ["Red/Blue", "Ruby/Sapphire", "Diamond/Pearl", "Black/White"],
        correct: "Ruby/Sapphire",
        points: 400,
      },
      {
        question: `Who is the champion of the Kanto region (Pokémon Red/Blue)?`,
        choices: ["Player's Rival", "Giovanni", "Professor Oak", "Player's Mom"],
        correct: "Player's Rival",
        points: 600,
      },
      {
        question: `This Champion wanders the Galar region with his trusty Charizard.`,
        choices: ["Lance", "Leon", "Blue", "Alder"],
        correct: "Leon",
        points: 800,
      },
      {
        question: `In Pokémon Ruby & Sapphire, you're given access to Beldum after defeating this Pokémon League Champion.`,
        choices: ["Alder", "Iris", "Steven", "Cynthia"],
        correct: "Steven",
        points: 1000,
      },
    ],
  },
  {
    category: "ANIME",
    questions: [
      {
        question: `Ash Ketchum begins his journey by leaving this town with his trusty companion, Pikachu.`,
        choices: ["Lavender Town", "Pallet Town", "Mahogany Town", "Littleroot Town"],
        correct: "Pallet Town",
        points: 200,
      },
      {
        question: `Ash earns his first badge from this Rock-type gym leader.`,
        choices: ["Brawly", "Jasmine", "Brock", "Roark"],
        correct: "Brock",
        points: 400,
      },
      {
        question: `What is the first Pokémon Ash ever caught?`,
        choices: ["Pidgey", "Caterpie", "Pikachu", "Mankey"],
        correct: "Caterpie",
        points: 600,
      },
      {
        question: `Team Rocket's Jessie and James trained these two Pokémon in the first season of the series.`,
        choices: ["Ekans & Koffing", "Seviper & Woobat", "Wobbufet & Carnivine", "Lickitung & Bewear"],
        correct: "Ekans & Koffing",
        points: 800,
      },
      {
        question: `These two Pokémon are known for being featured in the only two episodes that were taken off the air.`,
        choices: ["Tentacruel & Venonat", "Spearow & Unown", "Porygon & Jynx", "Raichu & Wigglytuff"],
        correct: "Porygon & Jynx",
        points: 1000,
      },
    ],
  },
];

// --------------------------Global Objects Defined--------------------------

// ----------Function to remove modal after question is answered-------------

function removeModal() {
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
  
    optionOne.addEventListener("click", removeModal);
    optionTwo.addEventListener("click", removeModal);
    optionThree.addEventListener("click", removeModal);
    optionFour.addEventListener("click", removeModal);
  
    modalInside.innerText = "";
    modalInside.dataset.correct = this.getAttribute("data-correct");
    modalInside.dataset.value = this.getAttribute("data-value");
    modalInside.append(questionDisplay, optionOne, optionTwo, optionThree, optionFour);
    modalContainer.classList.remove("hidden");
  
    const myCards = Array.from(document.querySelectorAll(".card"));
    myCards.forEach((card) => card.removeEventListener("click", showQuestion));
    event.target.children.length = 0;
}
  
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
          ">.< Do you even know what a Pokémon is? Refresh the page to try again. >.<"
        );
      } else if (score < 5000) {
        alert(
          ">.< Keep training, you're not quite ready to face the Pokemon League. Refresh the page to try again. >.<"
        );
      } else if (score < 10000) {
        alert(
          "^.^ Great work, but you still have a little work to do if you want to become Champion! Refresh the page to try again. ^.^"
        );
      } else {
        alert(
          "^.^ WOW! You could be the next Pokémon League Champion! Refresh the page to play again. ^.^"
        );
      }
    }
  }

// -------------Select Answer and Add or Subtract Score with Final Score Alerts-------------