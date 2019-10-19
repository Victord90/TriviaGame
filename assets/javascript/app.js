$(document).ready(function(){

let questions = [
    {
        question: "Who was the Orlando Magic's first draft pick?",
        option: ["Nick Anderson", "Darrel Armstrong", "Penny Hardaway", "Shaq"],
        answer: 0
    },

    {
        question: "What years did the Orlando Magic win the Eastern Confrence Finals?",
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
        option: ["Chase Center", "Camping World Stadium", "Amway Center", "Tropicana Field"],
        answer: 2
    },

    {
        question: "Who scored the most points in a single game for the Magic?",
        option: ["Nick Anderson", "Dwight Howard", "Shaq", "Tracy McGrady"],
        answer: 3
    }
];
console.log(questions.length);
let clockRunning = false;
let intervalId;
let time = 20;
let correct = 0;
let wrong = 0;
let pick;
let q;
let unanswered = 0;

// let timer = setInterval(myTimer, 2000);

/////////////////Set a timer for the displayed questions///////////////////////////////////////////

function timer () {
    if (!clockRunning){
        intervalId = setInterval(decrement, 1000);
        clockRunning = true;
    }
}

function decrement(){
    $("#timer").html("Time Left: " + time);
    time--;

    if (time === -1){
        unanswered++;
        $(".answerChoice").html("You ran out of time!!")
        stop();
        
    }
}  

function stop(){
    clockRunning = false;
    clearInterval(intervalId);
}



//////////////////Fucntion to display the questions and possible answers///////////////////////////////


function questionDisplay(){
    q = Math.floor(Math.random()* questions.length);
    pick = questions[q]
    
    for (let i = 0; i < questions.length; i++){
    $(".question").text(pick.question);
        
        $("#A").text(pick.option[0]);
        $("#B").text(pick.option[1]);
        $("#C").text(pick.option[2]);
        $("#D").text(pick.option[3]);

    }
    }

////////////////Click function to select answer/////////////////

$(".answer").on("click", function(){
    userGuess = $(this).attr(".answerChoice");
    if (userGuess === pick.answer){
        correct++;
        console.log(userGuess)
        console.log(correct)
    }else {
        wrong++;
        
    }
    
    
})








/////////////////////////Start the trivia///////////////////////////////

    function startTrivia(){
        $("#starter").text("Start Trivia");
        $("#starter").on("click", function(){
            $("#starter").hide();
            questionDisplay();
            timer();
        })
        // timeUp();
    }



startTrivia()


})