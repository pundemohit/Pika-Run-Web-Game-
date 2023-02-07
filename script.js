score = 0;
cross = true;

audiogo = new Audio('over.wav');
audiio = new Audio('play.mp3');

document.onkeydown = function (e) {
    console.log("Key code is: ", e.keyCode)
    
    if (e.keyCode == 38) {
        audiio.play();
        pika = document.querySelector('.pika');
        pika.classList.add('animatePika');
        setTimeout(() => {
            pika.classList.remove('animatePika')
        }, 700);
        //obstacle.classList.add('obstacleAni');
    }
    if (e.keyCode == 39) {
        audiio.play();
        pika = document.querySelector('.pika');
        pikaX = dx = parseInt(window.getComputedStyle(pika, null).getPropertyValue('left'));
        pika.style.left = pikaX + 112 + "px";
        //obstacle.classList.add('obstacleAni');

    }
    if (e.keyCode == 37) {
        pika = document.querySelector('.pika');
        pikaX = dx = parseInt(window.getComputedStyle(pika, null).getPropertyValue('left'));
        pika.style.left = pikaX - 112 + "px";
        //obstacle.classList.add('obstacleAni');

    }
   // obstacle = document.querySelector('.obstacle');
   // obstacle.classList.add('obstacleAni');
}

setInterval(() => {
    pika = document.querySelector('.pika');
    gameOver = document.querySelector('#gameOver');
    obstacle = document.querySelector('.obstacle');

    dx = parseInt(window.getComputedStyle(pika, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(pika, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);

    if (offsetX < 113 && offsetY < 52) {
        gameOver.innerHTML= "Game Over - Reload to start over";
        obstacle.classList.remove('obstacleAni');
        pika.classList.add('angrypika')
        document.getElementById('gameOver').style.visibility = 'visible';
        cross = false;
        audiogo.play();
        audiio.pause();
        setTimeout(() => {
            audiogo.pause();
        }, 5000);
    }
    else if (offsetX < 145 && cross) {
        score = score + 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);

        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.05;
            obstacle.style.animationDuration = newDur + 's';

        },3700);
    }

}, 10);

function updateScore(score) {
    scoreCont.innerHTML = "Your Score : " + score;
}