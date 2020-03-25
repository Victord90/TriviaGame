$(document).ready(function() {
  let questions = [
    {
      question: "Who was the Orlando Magic's first draft pick?",
      option: ["Nick Anderson", "Darrel Armstrong", "Penny Hardaway", "Shaq"],
      answer: 0
    },

    {
      question:
        "What years did the Orlando Magic win the Eastern Confrence Finals?",
      option: ["2017/2018", "1990/2000", "1998/2008", "1995/2009"],
      answer: 3
    },

    {
      question: "Who is the Magic's all time leader in points?",
      option: ["Aaron Gordon", "Tracy McGrady", "Dwight Howard", "Shaq"],
      answer: 2
    },

    {
      question: "Which building do the Magic play in?",
      option: [
        "Chase Center",
        "Camping World Stadium",
        "Amway Center",
        "Tropicana Field"
      ],
      answer: 2
    },

    {
      question: "Who scored the most points in a single game for the Magic?",
      option: ["Nick Anderson", "Dwight Howard", "Shaq", "Tracy McGrady"],
      answer: 3
    }
  ];
  let clockRunning = false;
  let qCount = questions.length;
  let intervalId;
  let time = 10;
  let correct = 0;
  let wrong = 0;
  let pick;
  let q;
  let unanswered = 0;
  let holder = [];
  let userGuess;

  // let timer = setInterval(myTimer, 2000);

  /////////////////Set a timer for the displayed questions///////////////////////////////////////////
  $("#reset").hide();
  $(".answer").hide();
  $(".choices").hide();
  $(".answerDiv").hide();

  ////////////////Start Game////////////////////

  $("#starter").on("click", function() {
    $("#starter").hide();
    questionDisplay();
    timer();
    for (let i = 0; i < questions.length; i++) {
      holder.push(questions[i]);
    }
  });

  function timer() {
    if (!clockRunning) {
      intervalId = setInterval(decrement, 1000);
      clockRunning = true;
    }
  }

  function decrement() {
    $(".timer").html("Time Left: " + time);
    time--;

    if (time === -1) {
      unanswered++;
      $(".answerDiv").html("You ran out of time!!");
      stop();
      userGuess = "";
      hidePic();
    }
  }

  function stop() {
    clockRunning = false;
    clearInterval(intervalId);
  }

  function resetGame() {
    $("#reset").hide();
    $(".answer").hide();
    $(".choices").hide();
    $(".answerDiv").hide();
    $("#starter").show();
  }

  //////////////////Fucntion to display the questions and possible answers///////////////////////////////

  function questionDisplay() {
    $(".answer").show();
    $(".answerDiv").show();
    q = Math.floor(Math.random() * questions.length);
    pick = questions[q];
    $(".question").html(pick.question);
    for (let i = 0; i < pick.option.length; i++) {
      let userChoice = $("<button>");
      userChoice.addClass("choices");
      userChoice.html(pick.option[i]);
      userChoice.attr("data-num", i);
      $(".answerDiv").append(userChoice);
    }

    ////////////////Click function to select answer/////////////////

    $(".choices").on("click", function() {
      userGuess = parseInt($(this).attr("data-num"));
      if (userGuess === pick.answer) {
        stop();
        correct++;
        userGuess = "";
        $(".answerDiv").html("Correct!!");
        hidePic();
      } else {
        stop();
        wrong++;
        userGuess = "";
        $(".answerDiv").html(
          "Wrong!! The correct answer is: " + pick.option[pick.answer]
        );
        hidePic();
      }
    });
  }

  function hidePic() {
    questions.splice(q, 1);
    setTimeout(function() {
      $(".answerDiv").empty();
      time = 10;

      if (correct + wrong + unanswered === qCount) {
        $(".question").empty();
        $(".question").html("Game Over!!");
        $(".answerDiv").append("Correct: " + correct);
        $(".answerDiv").append("Wrong: " + wrong);
        $(".answerDiv").append("Unanswered: " + unanswered);
        $("#reset").show();
        correct = 0;
        wrong = 0;
        unanswered = 0;
      } else {
        timer();
        questionDisplay();
      }
    }, 3000);
  }

  $("#reset").on("click", function() {
    $("#reset").hide();
    $(".answerDiv").empty();
    $(".question").empty();
    for (let i = 0; i < holder.length; i++) {
      questions.push(holder[i]);
    }
    timer();
    questionDisplay();
  });
});
