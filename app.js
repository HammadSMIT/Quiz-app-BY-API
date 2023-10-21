var ques = document.getElementById("ques")
var opt1 = document.getElementById("opt1")
var opt2 = document.getElementById("opt2")
var opt3 = document.getElementById("opt3")
var opt4 = document.getElementById("opt4")
let btn = document.getElementById('btn')
var index = 0
var questionsData = []







function fetchQuestions() {
fetch('https://opentdb.com/api.php?amount=10')
.then(data => data.json())
.then(data => {
   questionsData = data.results;
   index = 0;
   displayQuestions();
})
}

function displayQuestions(){
    if(index < questionsData.length){
        var mine = questionsData[index];
        ques.innerHTML = mine.question;
        opt1.innerHTML = mine.correct_answer;
        opt2.innerHTML = mine.incorrect_answers[0];
        opt3.innerHTML = mine.incorrect_answers[1];
        opt4.innerHTML = mine.incorrect_answers[2];
        index++
        

    }
    else{
        ques.innerHTML = "No Questions Available";
        opt1.innerHTML = "";
        opt2.innerHTML = "";
        opt3.innerHTML = "";
        opt4.innerHTML = "";
    }
}

function nextQues(){
   let getOptions = document.getElementsByName("options");
   for(var i = 0 ; i<getOptions.length ; i++){
    getOptions[i].checked = false
}
    btn.disabled = true

    fetchQuestions();

}
nextQues();

function clicked(){
  btn.disabled = false  
}
