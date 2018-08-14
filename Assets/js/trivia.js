$(document).ready(function() {

  var wins = 0;
  var losses = 0;
  var qnumber = 7;
  var qleft = 8;
  var rtally = 0;
  var wtally = 0;
  var timerId;
  $(".wins").text(`Wins: ${wins}`);
  $(".losses").text(`Losses: ${losses}`);

  var questions = {
    "Q1" : {
      "Q": "Who was the first James Bond?",
      "O": ["Sean Connary","Barry Nelson", "Idres Alba"],
      "A": "Barry Nelson"
    },
    "Q2" : {
      "Q": "What was the first James Bond Book?",
      "O": ["Casino Royal","Golden Eye", "You only Live Twice"],
      "A": "Casino Royal"
    },
    "Q3" : {
      "Q": "Who had the most outings as James Bond?",
      "O": ["Sean Connary","Roger Moore", "Daniel Craig"],
      "A": "Roger Moore"
    },
    "Q4" : {
      "Q": "What car did James Bond drive in Dr.No?",
      "O": ["Sunbeam Alpine","Bentley Mark IV", "Aston Martin DB5"],
      "A": "Sunbeam Alpine"
    },
    "Q5" : {
      "Q": "What bond movie is not offical cannon?",
      "O": ["For Your Eyes Only","Goldeye", "Never Say Never Again"],
      "A": "Never Say Never Again"
    },
    "Q6" : {
      "Q": "Who was the first Bond Girl?",
      "O": ["Tilly Masterson","Dink", "Honey Ryder"],
      "A": "Honey Ryder"
    },
    "Q7" : {
      "Q": "What was the name of Ian Flemmings hide away?",
      "O": ["Goldeneye","SkyFall", "Strangways"],
      "A": "Goldeneye"
    },
    "Q8" : {
      "Q": "What was James Bond's standard hand gun?",
      "O": ["Beretta 9mm","Walther PPK", "Desert Eagle"],
      "A": "Walther PPK"
    }
  }

  function wAnswer()
  {
    wtally++;
    clearInterval(timerId);
   $(".answers").empty();
   var img =  $("<img>").attr("src","Assets/images/wrong answer.gif")
   var quote = $("<P>").text("Wrong Answer!, Hope you do better on the next one, Total correct answers: " + rtally + " Total wrong answers: " + wtally);
   $(".answers").append(img);
   $(".answers").append(quote);
   setTimeout(function(){fireQuestion();}, 3000);
  }

  function rAnswer()
  {
    rtally++;
    clearInterval(timerId);
    $(".answers").empty();
   var img =  $("<img>").attr("src","Assets/images/right answer.gif")
   var quote = $("<P>").text("Great Job, You answered correctly. Total correct answers: " + rtally + " Total wrong answers: " + wtally);
   $(".answers").append(img);
   $(".answers").append(quote);
   setTimeout(function(){fireQuestion();}, 3000);
  }

  function createQuestion(question,options,answer){

    $(".answers").empty();
    $('#question').text(question);
    var frm = $('<form id="qForm">');

    var btn = $("<button id='submitAnswer'>").text("Submit");
    for(i = 0;i < options.length; i++)
    { 
      var q = $('<input type="radio" name="choice" value="' + options[i] + '">');
      frm.append(q);
      frm.append(options[i]);
      frm.append("<br>");
    }

    frm.attr("Answer",answer);
    $('.answers').append(frm);
    $('.answers').append(btn);
  }
  
  $(document).on("click", "#submitAnswer", function() {
    var radios = document.getElementsByName("choice");
    var i = 0, len = radios.length;
    var checked = false;
    var userAnswer;
    
    for( ; i < len; i++ ) {
       if(radios[i].checked) {
         checked = true;
         userAnswer = radios[i].value;
       }
    } 
    // if user click submit button without selecting any option, alert box should be say "please select choice answer".
    if(!checked) {
      alert("Please Select a Choice");
    }
    // Correct answer
    if(userAnswer === $("#qForm").attr("Answer")) {
      rAnswer();
    }
    // incorrect answer
    else {
      wAnswer();
    }
  });

  $(document).on("click", "#rGame", function() {
    wins = 0;
    losses = 0;
    qnumber = 7;
    qleft = 8;
    rtally = 0;
    wtally = 0;
    fireQuestion();
  });
  
  $(document).on("click", "#sGame", function() {
    qnumber = 7;
    qleft = 8;
    rtally = 0;
    wtally = 0;
    fireQuestion();
  });

  function StartTimer() {
   var timeLeft = 30;
   var elem = $("#countdown");
   timerId = setInterval(countdown, 1000);
   function countdown() {
      if (timeLeft == 0) {
        clearTimeout(timerId);
       wAnswer();
      } else {
        elem.text(timeLeft + ' seconds remaining');
        timeLeft--;
      };
    };
  }
  function fireQuestion()
  {
    if(qleft != 0)
    {
    cquestion = qnumber - (qleft -1);
    switch(cquestion){
      case 0:
      createQuestion(questions.Q1.Q,questions.Q1.O,questions.Q1.A);
      break;
      case 1:
      createQuestion(questions.Q2.Q,questions.Q2.O,questions.Q2.A);
      break;
      case 2:
      createQuestion(questions.Q3.Q,questions.Q3.O,questions.Q3.A);
      break;
      case 3:
      createQuestion(questions.Q4.Q,questions.Q4.O,questions.Q4.A);
      break;
      case 4:
      createQuestion(questions.Q5.Q,questions.Q5.O,questions.Q5.A);
      break;
      case 5:
      createQuestion(questions.Q6.Q,questions.Q6.O,questions.Q6.A);
      break;
      case 6:
      createQuestion(questions.Q7.Q,questions.Q7.O,questions.Q7.A);
      break;
      case 7:
      createQuestion(questions.Q8.Q,questions.Q8.O,questions.Q8.A);
      break;

    };
    StartTimer();
    qleft--;
    
    
  }
  else{
    if(rtally >= 6)
    {
      $(".answers").empty();
      var btnA = $("<button id='rGame'>").text("Reset");
      var btnB = $("<button id='sGame'>").text("New Game");
      var img =  $("<img>").attr("src","Assets/images/Winner.gif")
      var quote = $("<P>").text("Great Job, You won the game");
      $(".answers").append(img);
      $(".answers").append(quote);
      $(".answers").append(btnA);
      $(".answers").append(btnB);
      wins++;
      $(".wins").text(`Wins: ${wins}`);
      $(".losses").text(`Losses: ${losses}`);
    }
    else
    {
      $(".answers").empty();
      var btnA = $("<button id='rGame'>").text("Reset");
      var btnB = $("<button id='sGame'>").text("New Game");
      var img =  $("<img>").attr("src","Assets/images/loose.gif")
      var quote = $("<P>").text("Please try harder nextime");
      $(".answers").append(img);
      $(".answers").append(quote);
      $(".answers").append(btnA);
      $(".answers").append(btnB);
      losses++;
      $(".wins").text(`Wins: ${wins}`);
      $(".losses").text(`Losses: ${losses}`);
    }
  }


    
};

$("#startGame").on("click", function() {
  fireQuestion();
});



});