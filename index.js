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


//Home & guest score update event handlers//

homeBorder.addEventListener("click", function(e) {
    if (e.target.dataset.home) {   
        clickHandler(homeScore, parseInt(e.target.dataset.home))
    }
})

guestBorder.addEventListener("click", function(e) {
    if (e.target.dataset.guest) {
        clickHandler(guestScore, parseInt(e.target.dataset.guest))
    }
}) 
//Reset score//

resetBtn.addEventListener("click", function (e) {
    homeScore.innerHTML = 0;
    guestScore.innerHTML = 0; 
    homeBorder.classList.remove('winning');
    guestBorder.classList.remove('winning');
})
