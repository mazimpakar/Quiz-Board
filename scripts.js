function check() {
    var questionOne = document.Quiz.questionOne.values;
    console.log(questionOne)
    var questionTwo = document.Quiz.questionTwo.values;
    var questionThree = document.Quiz.questionThree.values;
    var questionFour = document.Quiz.questionFour.values;
    var questionFive = document.Quiz.questionFive.value;
    var questionSix = document.Quiz.questionSix.value;
    var questionSeven = document.Quiz.questionSeven.value;
    var questionEight = document.Quiz.questionEight.value

   
    var right = 0;


    if (questionOne == "correct") {
        right = right + 5;
    };
    if (questionTwo == "correct") {
        right = right + 5;
    };
    if (questionThree == "correct") {
        right = right + 5;
    };
    if (questionFour == "correct") {
        right = right + 5;
    };
    if (questionFive == "correct") {
        right = right + 5;

    };
    if( questionSix == "correct") {
        right = right + 5;
    };
    if(questionSeven == "correct") {
        right = right + 5;

    };
    if(questionEight == "correct") {
        right = right + 5;
    };



    document.getElementById("points").style.visibility = "visible";
    document.getElementById("correctNumber").innerHTML = "HERE IS YOUR SCORE:" + right + "/40";
    $(".container").fadeOut();

};
