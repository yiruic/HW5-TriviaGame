//set questions
var questions = [
{
question: "Who is not in Pulp Fiction?",
choices: ["Quentin Tarantino", "Samuel L. Jackson", "Uma Thurma", "Tom Cruise"],
correctAnswer: 3
}, 
{
question:"What did they call a Quarter Pounder with Cheese in Paris?",
choices: ["Royale With Cheese", "Quart De Livre Avec Fromage", "Pound-Quatre, Fromage American", "Le Burger-Fromage"],
correctAnswer: 0
}, 
{
question:"What is the name of the fictional cigarette brand created by Quentin Tarantino?",
choices: ["Rotten Tomatoes", "Red Apples", "Camel Red", "Old Golds"],
correctAnswer: 1
}, 
{
question:"Who attempted to rob and Vincent and Jules when eating breakfast?",
choices: ["Bonnie and Clyde", "Tom and Jerry", "Bambi and Thumper", "Pumpkin and Honeybunny"],
correctAnswer: 3
}]

$(document).ready(function () {
  
  $('#start').on('click', function () {

        for (i=0 ; i<= questions.length; i++) {

         var i = 0;
         var correct = 0;

          $('#question').text(questions[i].question);
          $('#zero').text(questions[i].answers[0]);
          $('#one').text(questions[i].answers[1]);
          $('#two').text(questions[i].answers[2]);
          $('#three').text(questions[i].answers[3]);
          $('#start').remove();
          

        delayButtonAlert = setTimeout(function() {
         alert("All Done!");
         alert("Correct = " + correct);
         alert("Wrong = " + wrong);
         return;
                 }, 60000);
      };
  })
});


$(document).ready(function () {
    $('#next').on('click', function () {
        var answer = $('input[name="answers"]:checked').val();
        var answerString = questions[i].answers[answer];
        $('p[class="userAnswer"][value=' + i + ']').text(answerString);
        var correctAnswer = questions[i].correctAnswer;
        $('p[class="correctAnswer"][value=' + i + ']').text(questions[i].answers[correctAnswer]);
        if (answer == questions[i].correctAnswer) {
            score++;
        } else {
            $('tr[class="row"][name=' + i + ']').css('background', '#FE2E64');
        }
        if (!$('input[name="answers"]').is(':checked')) {
            alert("please make a choice");
            return undefined; //stops executing the rest of the code
        }
        i++;

        if (i < 4) {
            $('.choices').css('display', 'none');
            $('#questions').text(questions[i].question);
            $('#zero').text(questions[i].answers[0]);
            $('#one').text(questions[i].answers[1]);
            $('#two').text(questions[i].answers[2]);
            $('#three').text(questions[i].answers[3]);
            $('.choices').show('slow');
            $('input[name="answers"]').prop('checked', false);

        }
        if (i > 3) {

            $('#questions').remove();
            $('#score').text("You have completed the questions, your score is " + score);//score*(100/i)
            $('#results').fadeIn('fast');
        }


    });
});



