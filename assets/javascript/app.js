$(document).ready(function(){

let questions = [
    {
        question: "question1",
        a: "option1",
        b: "option2",
        c: "option3",
        d: "option4"
    },

    {
        question: "question2",
        a: "option1",
        b: "option2",
        c: "option3",
        d: "option4"
    },

    {
        question: "question3",
        a: "option1",
        b: "option2",
        c: "option3",
        d: "option4"
    },

    {
        question: "question4",
        a: "option1",
        b: "option2",
        c: "option3",
        d: "option4"
    },

    {
        question: "question5",
        a: "option1",
        b: "option2",
        c: "option3",
        d: "option4"
    }
];
console.log(questions.length);

let correct = 0;
let wrong = 0;
// let timer = setInterval(myTimer, 2000);

/////////////////Set a timer for the displayed questions///////////////////////////////////////////

// let timer = setInterval(myTimer, 2000);

//     function myTimer(){
//         $("#timer").text("Time left: " + timer );
//             questionDisplay() ;
//             clearInterval(questionDisplay);
            
                 
//         }
    



//////////////////Fucntion to display the questions and possible answers///////////////////////////////
let order = questions.sort(() => Math.random() - .5)
console.log(order);

function questionDisplay(){
    for (let i = 0; i < questions.length; i++){
        $(".question").text(questions[0].question);
        $("#A").text(questions[0].a);
        $("#B").text(questions[0].b);
        $("#C").text(questions[0].c);
        $("#D").text(questions[0].d);
    }
    




}



/////////////////////////Start the trivia///////////////////////////////

    function startTrivia(){
        $("#starter").text("Start Trivia");
        $("#starter").on("click", function(){
            $("#starter").hide();
            questionDisplay();
        })
    }



startTrivia()
 //questionDisplay();

// myTimer();

})