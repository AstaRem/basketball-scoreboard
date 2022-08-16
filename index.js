//all 6 buttons must work
//new game - to 0


//home team results
let newScoreHome = 0
let  scoreHome = document.getElementById("score-home")

function plusOneH(){
    newScoreHome += 1
    scoreHome.textContent = newScoreHome;
}

function plusTwoH(){
    newScoreHome += 2
    scoreHome.textContent = newScoreHome;

}

function plusThreeH(){
    newScoreHome += 3
    scoreHome.textContent = newScoreHome;


}

//guest team results
let newScoreGuest = 0
let  scoreGuest = document.getElementById("score-guest")

function plusOneG(){
    newScoreGuest += 1
    scoreGuest.textContent = newScoreGuest;
}

function plusTwoG(){
    newScoreGuest += 2
    scoreGuest.textContent = newScoreGuest;

}

function plusThreeG(){
    newScoreGuest += 3
    scoreGuest.textContent = newScoreGuest;
}

//start new game
function startNew(){
    newScoreHome = 0
    newScoreGuest = 0
    scoreHome.textContent = newScoreHome;
    scoreGuest.textContent = newScoreGuest
}

