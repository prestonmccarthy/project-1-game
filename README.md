Project 1 - GAME

Game Title - Pokémon Trivia
    Background Info: Pokémon has always been a huge part of my life and I was so excited to get an opportunity to incorporate my knowledge of the game/show into a functional trivia-style game.
    -When making this game, I struggled with whether I wanted to create my elements in JS or HTML and style from there, so I went back and forth a few times before I finally landed on JS as my primary element creation method. 

Screenshots - Located in Assets Folder

![Alt text](assets/1.%20Trivia%20Wireframe.png)
![Alt text](assets/2.%20Game%20Start.png)
![Alt text](assets/3.%20Hover%20Over%20Card.png)
![Alt text](assets/4.%20Question%20Appears%20and%20Numbers%20Disappear%20from%20Card.png)
![Alt text](assets/5.%20Final%20Question%20Answered%20with%20Alert.png)
![Alt text](assets/6.%20Post%20Game.png)

Technologies Used - JavaScript, HTML, CSS

Getting Started:
    Link to Game: https://prestonmccarthy.github.io/project-1-pokemon-trivia/
    Instructions: 
        Mouse over question 
            -> question border changes color to indicate which question you're about to select.
        When clicked
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

Next Steps:
    Planned Enhancements: I'd like to go over this again and adjust the trivia questions so they're a bit more difficult and updated to better align with the newer games.
