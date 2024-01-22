let add1Home = document.getElementById("home1");
let add2Home = document.getElementById("home2");
let add3Home = document.getElementById("home3");
let add1Guest = document.getElementById("guest1");
let add2Guest = document.getElementById("guest2");
let add3Guest = document.getElementById("guest3");

let homeBorder = document.getElementById("home-scoreboard");
let guestBorder = document.getElementById("guest-scoreboard")

let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
let resetBtn = document.getElementById("reset-btn");



function highlightWinningTeam() {
    let homeScoreNum = parseInt(homeScore.textContent);
    let guestScoreNum = parseInt(guestScore.textContent);
    if (homeScoreNum > guestScoreNum) {
      homeBorder.classList.add('winning');  
    }else if (homeScoreNum < guestScoreNum) {
        homeBorder.classList.remove('winning');
        guestBorder.classList.add('winning');
    }else {
        homeBorder.classList.remove('winning');
        guestBorder.classList.remove('winning');
        }
}

function updateScore(element, increment) {
     let currentScore = parseInt(element.textContent);
    currentScore += increment;
    element.innerHTML = currentScore;
}

function clickHandler(element, increment) {
    updateScore(element, increment);
    highlightWinningTeam(); 
}


//Home score update event handlers//

add1Home.addEventListener("click", function (e) {
    clickHandler(homeScore, 1);
})

add2Home.addEventListener("click", function (e) {
    clickHandler(homeScore, 2);
})

add3Home.addEventListener("click", function (e) {
    clickHandler(homeScore, 3);
})

//Guest score update//

add1Guest.addEventListener("click", function (e) {
    clickHandler(guestScore, 1);
})

add2Guest.addEventListener("click", function (e) {
    clickHandler(guestScore, 2);
})

add3Guest.addEventListener("click", function (e) {
    clickHandler(guestScore, 3);
})

//Reset score//

resetBtn.addEventListener("click", function (e) {
    homeScore.innerHTML = 0;
    guestScore.innerHTML = 0; 
    homeBorder.classList.remove('winning');
    guestBorder.classList.remove('winning');
})