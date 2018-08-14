$( document ).ready(function() {

  var wins = 0;
  var losses = 0;
  var qnumber = 7;
  var qleft = 7;
  var rtally, wtally;

  $("#wns").text(wins);
  $("#los").text(losses);

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
      "Q": "Who was the first James Bond?",
      "O": ["Sean Connary","Barry Nelson", "Idres Alba"],
      "A": "Barry Nelson"
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
    wtally++
    $(".answers").empty();
   var img =  $("<img>").attr("src","Assets/images/wrong answer.gif")
   var quote = $("<P>").text("Wrong Answer!, Hope you do better on the next one");
   $(".answers").append(img);
   $(".answers").append(quote);
  }

  function rAnswer()
  {
    rtally++
    $(".answers").empty();
   var img =  $("<img>").attr("src","Assets/images/Winner.gif")
   var quote = $("<P>").text("Great Job, You answered correctly");
   $(".answers").append(img);
   $(".answers").append(quote);
  }

  function createQuestion(question,options,answer){

  
    $('#question').text(question);
    var frm = $('<form id="qForm">');

    var btn = $("<button id='submitAnswer'>").text("Submit Answer");
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
  $("#submitAnswer").on("click", function() {
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
      alert("please select choice answer");
      return;
    }
    // Correct answer
    if(userAnswer === $("#qForm").attr("Answer")) {
      rAnswer()
    }
    // incorrect answer
    else {
      wAnswer()
    }
  });

  switch(cquestion){
    case 0:
    createQuestion(questions.Q1.Q,questions.Q1.O,questions.Q1.A);
    break;

  }

});