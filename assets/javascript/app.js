// Set counter for 30seconds
var counter = 30;
var intervalId;

$("#start").on("click", run);
$("#stop").on("click", stop); 

function run(){
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}
function decrement() {
    counter--;
    $("#show-number").html("<h2>" + counter + "</h2>");
    if (counter === 0) {
        stop();
        alert("Times Up!");
    }
}

// function startGame() {
// // user clicks start and timer begins
//     $("#start").hide();
//     counter();
//     question1();
//     answerCheck();
// })
// }
// var timer = new Timer();
// timer.start();
// timer.addEventListener('secondsUpdated', function (e) {
//     $('#start').html(timer.getTimeValues().toString());
// });
// questions appear

// user clicks answer, one chose 