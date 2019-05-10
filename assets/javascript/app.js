var questionsArr = [{
    q: "1. Who released a song called Hillbilly shoes?",
    choices: ["Alan Jackson.", "Reba McEntire.", "Montgomery Gentry.", "Kenny Chesney."],
    answer: 3,
    gifURL: "https://media.giphy.com/media/3o6Mbqr2KXXVlEfZg4/giphy.gif",
    answerBody: "Montgomery Gentry released a song called Hillbilly Shoes. The song was on their album called Tattoos & Scars, that was released in 1999. The song peaked at number 13 on the US Billboard Hot Country Songs chart."},
    {
    q: "2. What was the name of Alabama's 1992 hit about always rushing to do things?",
    choices: ["I'm in a Hurry.", "Born Country", "Clear Water Blues.", "Down Home."],
    answer: 1,
    gifURL: "https://media.giphy.com/media/39BdJ36C2j4f6vtjwi/giphy.gif",
    answerBody: "This song is called I'm in a Hurry (And Don't Know Why). The song covers the topic of rushing through life without understanding why we're rushing. The song was a hit for the band and is on their album titled American Pride."},
    {
    q: "3. What is the name of the album by Faith Hill that features the song Breathe?",
    choices: ["Faith Hill.", "Cry.", "It Matters to Me.", "Breathe."],
    answer: 4,
    gifURL: "https://media.giphy.com/media/wOIhQl355kxTlgVfhI/giphy.gif",
    answerBody: "The album by Faith Hill that features her hit song Breathe is also titled Breathe. The album was released in 1999 and it was Faith's fourth album. It also featured songs such as The Way You Love Me and Love Is a Sweet Thing."},
    {
    q: "4. Who released the hit song Achy Breaky Heart?",
    choices: ["Tim McGraw.", "Brooks & Dunn.", "Toby Keith.", "Billy Ray Cyrus."],
    answer: 4,
    gifURL: "https://media.giphy.com/media/yfVTDKmfJQ5Wg/giphy.gif",
    answerBody: "Billy Ray Cyrus released the hit single Achy Breaky Heart in 1992. The song was certified platinum and hit number 23 on CMT's 100 Greatest Videos."},
    {
    q: '5. What is the name of the Garth Brooks album that spawned hits such as Friends in Low Places and The Thunder Rolls?',
    choices: ["In Pieces.", "No Fences.", "The Chase.", "Ropin' the Wind."],
    answer: 2,
    gifURL: "https://media.giphy.com/media/SJlZBTtYSijtQ8am9N/giphy.gif",
    answerBody: "The album No Fences has both of these songs on it. It was Garth's second album, and it spawned many number-one hits. Although it has been delayed, there was an announcement in 2015 that the album would be rereleased."},
    {
    q: "6. What Dixie Chicks album includes the song There's Your Trouble?",
    choices: ["Fly.", "Little Ol' Cowgirl.", "Wide Open Spaces.", "Shouldn't a Told You That."],
    answer: 3,
    gifURL: "https://media.giphy.com/media/3orifaYYymK1wll2cE/giphy.gif",
    answerBody: "The album titled Wide Open Spaces includes the song There's Your Trouble. This album was the band's fourth album and it won a Grammy for Best Country Album."},
    {
    q: "7. Who released a song titled She's in Love with the Boy?",
    choices: ["Trisha Yearwood.", "Shania Twain.", "Alison Krauss.", "Reba McEntire."],
    answer: 1,
    gifURL: "https://media.giphy.com/media/ilqOZTliXVYBbgM12w/giphy.gif",
    answerBody: "Trisha Yearwood released She's in Love with the Boy in 1991, on her self-titled album. The song hit number one in the United States and Canada, making it Trisha's first number-one."},
    {
    q: "8. Who released the number one hit Strawberry Wine?",
    choices: ["Shania Twain.", "Pam Tillis.", "Dolly Parton.", "Deanna Carter."],
    answer: 4,
    gifURL: "https://media.giphy.com/media/3orieS8k0mATObv6Uw/giphy.gif",
    answerBody: "Deana Carter released Strawberry Wine in 1996. The song has been nominated for many awards and won a few of them. It peaked at number one in the United States and Canada."},
    {
    q: "9. Who released a song called Would I, in 1996?",
    choices: ["Tim McGraw.", "The Oak Ridge Boys.", "Randy Travis.", "Alan Jackson."],
    answer: 3,
    gifURL: "https://media.giphy.com/media/3o6Zt4ZOyssiuQVzdm/giphy.gif",
    answerBody: "Randy Travis released Would I in 1996, on his album titled Full Circle. The song peaked at number 18 on the Canada Country Tracks chart and at number 25 on the US Billboard Hot Country songs chart in the United States."},
    {
    q: "10. What Dolly Parton album features the song Rockin' Years?",
    choices: ["Love Is Like a Butterfly.", "Eagle When She Flies.", "The Bargain Store.", "Dolly, Dolly, Dolly."],
    answer: 2,
    gifURL: "https://media.giphy.com/media/26gso0pmfbwOdcdBC/giphy.gif",
    answerBody: "The album Eagle When She Flies features the song Rockin' Years. This album was Dolly's 30th album and hit number one on the US Billboard Top Country Albums chart. Dolly went on the Eagle When She Flies Tour in support of the album."}];

  var userChoice;
  var questionNum = 0;
  var choiceOne;
  var choiceTwo;
  var choiceThree;
  var choiceFour;
  var wins = 0;
  var losses = 0;
  var misses = 0;
  var counter = 30;
  var correctAnswer;
  var countdown;
  var announcement;
  var explanation;
  var gif;
  var choiceText;
  var timer;
  var score;
  var startButton;
  var restartButton;
  var i;

  $(document).ready(function() {
    // Insert Start button on page load
    startButton = $('<button id="start">').text("Start Game")
    $('#start-button').html(startButton);

    function generateQuestion() {
      // Clear Previous Screen
      clearScreen();
      // Generate next question
      if (questionNum === questionsArr.length) {
          console.log("Game Over!")
          gameOver();
        } else {
          //Reset Clock
          counter = 30
          clearInterval(timer);
          clearInterval(countdown);
          // Initial Push of Time Remaining to DOM
          $('#time-left').text("Time Remaining: " + counter )
          countdown = setInterval(function () { 
          counter--
          console.log(counter)
          // Push coundown to DOM
          $('#time-left').text("Time Remaining: " + counter )
            if (counter === 0) {
              $('#time-left').text("Time's Up!")
              // Add a miss to the misses variable
              misses++;
              // Send announcement to DOM
              announcement = ('You ran out of time!');
              console.log("Missed Questions: " + misses);
              // Show the correct answer/explanation
              populateAnswer();
              questionNum++;
              clearInterval(countdown);
              console.log("Time's Up!");
            }
          }, 1000);
          i = questionNum
          $('#question').text(questionsArr[i].q);
          console.log("Question: " + questionsArr[i].q);
          correctAnswer = (questionsArr[i].answer);
          console.log("Correct Answer: " + correctAnswer)
          choiceOne = $('<button id="options" value="1">').text(questionsArr[i].choices[0]);
          choiceTwo = $('<button id="options" value="2">').text(questionsArr[i].choices[1]);
          choiceThree = $('<button id="options" value="3">').text(questionsArr[i].choices[2]);
          choiceFour = $('<button id="options" value="4">').text(questionsArr[i].choices[3]);
          $('#choices').empty();
          $('#choices').append(choiceOne, choiceTwo, "<br/>", choiceThree, choiceFour);
          explanation = (questionsArr[i].answerBody);
          correctText = (questionsArr[i].choices[correctAnswer - 1]);
          gif = ('<img src="' + questionsArr[i].gifURL + '" height="200px">');
        }
    }

    function populateAnswer() {
      // Clear Previous Screen
      clearScreen();
      // Send announcement to DOM
      $('#announcement').text(announcement);
      $('#correct-explanation').text(explanation);
      $('#correct-answer').text("Correct Answer: " + correctText);
      $('#correct-gif').html(gif);
      clearInterval(timer);
      timer = setInterval(function(){
         generateQuestion() 
        }, 12000);
    }

    function gameOver() {
      // Clear Previous Screen
      clearScreen();
      // Final score calculation
      score = (parseInt(wins) / questionsArr.length) * 100
      console.log(score);
      // Send final score to DOM
      $('#results').text("Your final score is " + score + "%");
      // Send wins tally to DOM
      $('#wins').text("Correct Answers: " + wins);
      // Send losses tally to DOM
      $('#losses').text("Incorrect Answers: " + losses);
      // Send misses tally to DOM
      $('#misses').text("Missed Questions: " + misses);
      // Insert "Retry the Quiz" button
      retryButton = $('<button id="restart">').text("Retry the Quiz!")
      $('#start-button').html(retryButton);
    }

    function clearScreen() {
      // Clear Answer Screen
      $('#announcement').text("");
      $('#correct-explanation').text("");
      $('#correct-answer').text("");
      $('#correct-gif').html("");
      // Clear Question Screen
      $('#time-left').text("");
      $('#question').text("");
      $('#choices').empty();
      // Clear Game Over Screen
      $('#results').text("");
      $('#wins').text("");
      $('#losses').text("");
      $('#misses').text("");
      // Reset Timers
      clearInterval(timer);
      clearInterval(countdown);
    }

    $('body').on('click', '#start', function() {
      console.log("Start Clicked")
      // Clear Previous Screen
      clearScreen();
      // Hide start button
      $(this).hide();
      // Populate the questions with text on DOM
      generateQuestion();
    })

    $('body').on('click', "#options", function(event) {
        console.log("Answer Clicked")
        userChoice = parseInt($(this).val());
        choiceText = $(this).text();
        console.log(choiceText)
        console.log("Value of clicked button: " + userChoice)
          // If userChoice equals answer (win)
          if (userChoice === correctAnswer) {
              // Add a win to the wins variable
              wins++;
              // Send announcement to DOM
              announcement = ("You chose: " + choiceText + ' You are correct!');
              console.log("Wins: " + wins)
          // If userChoice does not equal answer () (loss)
          } else if (userChoice !== correctAnswer) {
              // Add a loss to the losses variable
              losses++;
              // Send announcement to DOM
              announcement = ("You chose: " + choiceText + ' You are incorrect!');
              console.log("Losses: " + losses)
          }
        // Show the correct answer/explanation
        populateAnswer();
        // go to next question
        questionNum++
        clearInterval(countdown);
      });
      $('body').on('click', '#restart', function() {
        console.log("Restart Clicked")
        // Reset questionNum & tallies
        questionNum = 0;
        wins = 0;
        losses = 0;
        misses = 0;
        // Clear Previous Screen
        clearScreen();
        // Hide start button
        $(this).hide();
        // Populate the questions with text on DOM
        generateQuestion();
      });

    });
