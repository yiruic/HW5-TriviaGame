var panel = $("#quiz-area");

//set questions
var questions = [
{
question: "Who is not in Pulp Fiction?",
answers: ["Quentin Tarantino", "Samuel L. Jackson", "Uma Thurma", "Tom Cruise"],
correctAnswer: "Tom Cruise"
},
{
question:"What did they call a Quarter Pounder with Cheese in Paris?",
answers: ["Royale With Cheese", "Quart De Livre Avec Fromage", "Pound-Quatre, Fromage American", "Le Burger-Fromage"],
correctAnswer: "Royale With Cheese"
},
{
question:"What is the name of the fictional cigarette brand created by Quentin Tarantino?",
answers: ["Rotten Tomatoes", "Red Apples", "Camel Red", "Old Golds"],
correctAnswer: "Red Apples"
},
{
question:"Who attempted to rob and Vincent and Jules when eating breakfast?",
answers: ["Bonnie and Clyde", "Tom and Jerry", "Bambi and Thumper", "Pumpkin and Honeybunny"],
correctAnswer: "Pumpkin and Honeybunny"
}]

var game = {

  correct: 0,
  incorrect: 0,
  counter: 60,

  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      console.log("TIME UP");
      game.done();
    }
  },

  start: function() {
    timer = setInterval(game.countdown, 1000);

    $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>60</span> Seconds</h2>");

    $("#start").remove();

    //append questions
    for (var i = 0; i < questions.length; i++) {
      var currentQuestion = questions[i];
      panel.append("<h2>" + currentQuestion.question + "</h2>");
      //append answers
      for (var j = 0; j < currentQuestion.answers.length; j++) {
        panel.append(
          "<div><input type='radio' name='question-" + i + "' value='" + currentQuestion.answers[j] + "'>" + currentQuestion.answers[j] + "</div>");
      }
      panel.append('<br/>')
    }
    //append done button
    panel.append("<button id='done'>Done</button>");
  },

  done: function() {
    // when a user clicks done:
    // get the checked answer for a question
    // compare to the actual answer

    var answer0 = $("input[name='question-0']:checked").val()
    if (answer0 === questions[0].correctAnswer) {
      game.correct++;
    } else {
      game.incorrect++;
    };

    var answer1 = $("input[name='question-1']:checked").val()
    if (answer1 === questions[1].correctAnswer) {
      game.correct++;
    } else {
      game.incorrect++;
    };

    var answer2 = $("input[name='question-2']:checked").val()
    if (answer2 === questions[2].correctAnswer) {
      game.correct++;
    } else {
      game.incorrect++;
    };

    var answer3 = $("input[name='question-3']:checked").val()
    if (answer3 === questions[3].correctAnswer) {
      game.correct++;
    } else {
      game.incorrect++;
    };

    this.result();

  },

  result: function() {

    clearInterval(timer);

    $("#sub-wrapper h2").remove();

    panel.html("<h2>All Done!</h2>");
    panel.append("<h3>Correct Answers: " + this.correct + "</h3>");
    panel.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    panel.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
  }
};


// CLICK EVENTS

$(document).on("click", "#start", function() {
  game.start();
});

$(document).on("click", "#done", function() {
  game.done();
});
