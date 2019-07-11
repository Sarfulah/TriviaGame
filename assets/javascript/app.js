$(document).ready(function () {
    // Set counter for 30seconds
    var counter = 30;
    var intervalId;


    $("#start").on("click", run);
    $("#stop").on("click", stop);

    function run() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
        startGame();

    }
    function startGame() {
        $("#start").hide();
        for (var i = 0; i < questions.length; i++) {
            // Display the question in a new paragraph
            var questionP = $("<p>");
            questionP.text(questions[i].question)
            // Display each answer as a radio button
            var optionA = $("<input type='radio'>");
            optionA.text(questions[i].answers.a);
            var optionB = $("<input type='radio'>");
            optionB.text(questions[i].answers.b);
            var optionC = $("<input type='radio'>");
            optionC.text(questions[i].answers.c);
            // Add a value for the answer to each radio button
            // Append it to the page
            $("#game").append(questionP);
            $("#game").append("<label><input type='radio' name='" + i + "' value='" + questions[i].answers.a + "'>" + questions[i].answers.a + "</label>");
            $("#game").append("<label><input type='radio' name='" + i + "' value='" + questions[i].answers.b + "'>" + questions[i].answers.b + "</label>");
            $("#game").append("<label><input type='radio' name='" + i + "' value='" + questions[i].answers.c + "'>" + questions[i].answers.c + "</label>");



        }

    }

    function decrement() {
        counter--;
        $("#show-number").html("<h2>" + counter + "</h2>");
        if (counter === 0) {
            stop();
            alert("Times Up!");
        }

    }
    var questions = [



        {
            question: "What fast food restaurant is closed on Sundays?",
            answers: {
                a: "Chick-fil-A",
                b: "Sonic",
                c: "Checkers",
            },
            correctAnswer: "a"
        },





        {
            question: "Which fast food restaurant was first to open in the U.S.?",
            answers: {
                a: "McDonalds",
                b: "KFC",
                c: "White Castle",
            },
            correctAnswer: "c"
        },
        {
            question: "What restaurant slogan is Finger Lickin Good?",
            answers: {
                a: "BurgerKing",
                b: "Popeyes",
                c: "KFC",
            },
            correctAnswer: "c"
        },
        {
            question: "What fastfood restaurant had a Chihuahua as their mascot?",
            answers: {
                a: "Chipotle",
                b: "Taco Bell",
                c: "Qdoba",
            },
            correctAnswer: "b"
        },
        {
            question: "What fastfood restaurant has the Golden Arches?",
            answers: {
                a: "Sonic",
                b: "McDonalds",
                c: "Burger King",
            },
            correctAnswer: "b"
        },
        {
            question: "Where did Burger King open their first franchise?",
            answers: {
                a: "Miami",
                b: "Texas",
                c: "Los Angeles",
            },
            correctAnswer: "a"
        },
        {
            question: "What fastfood restaurant usually collabs with Taco Bell?",
            answers: {
                a: "Little Ceasers",
                b: "Pizza Hut",
                c: "Papa Johns",
            },
            correctAnswer: "b"
        }
    ]
})

