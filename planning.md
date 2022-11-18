Project 1: Game

Choice of Game: Trivia (Pokemon Trivia)

Pseudocode:
Mouse over question 
    -> question border changes color to indicate which question you're about to select.
when clicked
    -> question and multiple choice answers appear
User clicks answer (1 of 4)
    -> if correct
        -> add points to total score
    -> else
        -> subtract points from total score
All questions answered
    -> if score is over 10,000
        -> Player is told they are the new Champion
    -> else if score is over 5,000 and less than 10,000
        -> Player is told they have work to do if they want to be Champion
    -> else if score is over 0 and less than 5,000
        -> Player is told to keep training, they're not ready to face the Pokemon League
    -> else if score is less than 0
        -> Player is told the world of Pokemon might not be right for them
Refresh page to start game over


Project Presentation:
1. Introduce Project:
    - Paraphrase the above
2. Demonstrate Project:
    - Launch Game by clicking Link in README
    - Play the game! If necessary, manipulate the values of variables in the console to ensure a quick win or loss.
3. Show/Discuss Code:
    - Briefly show HTML/CSS
    - Show JS and discuss favorite function.
        function getAnswer() - is my favorite. 
4. Share the experience:
    - What was my biggest challenge?
    - What are the key learnings/takeaways?
5. Q & A - Feedback


FAVORITE FUNCTION: 
//
function getAnswer() {
    const allCards = Array.from(document.querySelectorAll(".card"));
    allCards.forEach((card) => {
      if (card.innerText !== "") {
        card.addEventListener("click", showQuestion);
      } else {
        card.classList.add("emptyCard");
      }
    });

    // ^^ Displays Questions once card is clicked, and also displays empty card when question has been answered. ^^
  
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

    // ^^ Adds or Subtracts from Score depending on Right/Wrong answer given. If score falls below 0, score color will change to red to indicate negative current score. ^^
  
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

    // ^^ Alerts User on Whether they did well or if they need to study up on their Pokémon knowledge. ^^