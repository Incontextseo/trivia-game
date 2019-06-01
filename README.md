# trivia-game
Homework 5 https://incontextseo.github.io/trivia-game/

HTML
 - Background
 - H1
 - Start Button
 - Time Remaining: 30 seconds per question
 - Question
 - 4 options
 - Answer pages with gifs to show each correct answer
 - Restart Button


CSS
 - hover over the multiple choice turns them into buttons

Variables
 - correctTally
 - incorrectTally
 - questionsObj (object with questions and answers [values 1-4])? (or two arrays with questions matched up with answers)
 - userChoice


Javascript/Jquery
 - Load Start Button & remove after click
 - Start button starts the game (on-click function)
    - Loop that goes through the questionsObj
        - If questions remain the game continues
            - Shows the question (questionObj.question[i])
                - Shows the counter
                - if userChoice matches the questionsObj.answer[i] value
                    - "Correct Answer" content is shown.
                    - Tally added to correcttally variable
                - else if userChoice does not match the questionsObj.answer[i] value
                    - "Incorect Answer" content is show.
                    - Tally added to incorrectTally variable
    - "Game Over" content is shown after all the questions have been answered.
    - Start over button that restarts the game (on-click function - calls gamePlay function above?)



