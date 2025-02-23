const DOWN = 'down';
const UP = 'up';
let startingX = 50;
let startingY = 50;
let cards = [];
const gameState = {
    totalPairs: 6,
    flippedCards: [],
    numMatched: 0,
    attempts: 0,
    waiting: false    
};
let cardfaceArray = [];
let cardBack;
function preload() {
    cardBack = loadImage('images/card-back.png');
    cardfaceArray = [
        loadImage('images/birds.png'),
        loadImage('images/bolt.png'),
        loadImage('images/exhume.png'),
        loadImage('images/lotus.png'),
        loadImage('images/orb.png'),
        loadImage('images/sol.png')
    ]
}
function setup() {
    createCanvas(1500, 840);
    textFont('Luminari');
    let selectedFaces = [];
    for (let z = 0; z < 6; z++) {
        const randomIdx = floor(random(cardfaceArray.length));
        const face = cardfaceArray[randomIdx];
        selectedFaces.push(face);
        selectedFaces.push(face);
        // remove the used cardface so it doesn't get randomly selected again
        cardfaceArray.splice(randomIdx, 1);
    }
    selectedFaces = shuffleArray(selectedFaces);
    for (let j = 0; j < 3; j++) {
        for (let i = 0; i < 4; i++) {
            const faceImage = selectedFaces.pop();
            cards.push(new Card(startingX, startingY, faceImage));
            startingX += 200;
        }
        startingY += 250;
        startingX = 50;
    }
}

function draw () {
    background('rgb(40, 55, 18)');
    if (gameState.numMatched === gameState.totalPairs) {
        fill('red');
        textSize(66);
        text('YOU WIN!', 1000, 425);
        noLoop();
    }
    for (let k = 0; k < cards.length; k++) {
        if(!cards[k].isMatch) {
            cards[k].face = DOWN;
        }
        cards[k].show();
    }
    noLoop();
    gameState.flippedCards.length = 0;
    gameState.waiting = false;
    textSize(36);
    fill('rgb(121, 171, 193)');
    stroke('rgb(93, 31, 22)');
    strokeWeight(4);
    text('Attempts: ' + gameState.attempts, 1075, 700);
    text('Matches: ' + gameState.numMatched, 1075, 750);
    textSize(50);
    text('Magic: The Gathering', 900, 75);
    text('Memory Game', 970, 150);
    noStroke();
}

function mousePressed () {
    if (gameState.waiting) {
        return;
    }
    for (let k = 0; k < cards.length; k++) {
        // first check flipped cards length, and then we trigger flip
        if (gameState.flippedCards.length < 2 && cards[k].didHit(mouseX, mouseY)) {
            console.log('flipped', cards[k]);
            gameState.flippedCards.push(cards[k]);
        }
    }
    if (gameState.flippedCards.length === 2) {
        gameState.attempts++;
       if (gameState.flippedCards[0].cardFaceImg === gameState.flippedCards[1].cardFaceImg) {
        // cards match. time to score.
        // mark cards as matched so they don't flip back
        gameState.flippedCards[0].isMatch = true;
        gameState.flippedCards[1].isMatch = true;
        // empty the flipped cards array
        gameState.flippedCards.length = 0;
        // increment the score
        gameState.numMatched++;
        loop();
       } else {
            gameState.waiting = true;
            const loopTimeout = window.setTimeout(() => {
                loop();
                window.clearTimeout();
            }, 2000);
       }
    }
}

class Card {
    constructor (x, y, cardFaceImg) {
        this.x = x;
        this.y = y;
        this.width = 150;
        this.height = 210;
        this.face = DOWN;
        this.cardFaceImg = cardFaceImg;
        this.isMatch = false;
        this.show();
    }

    show () {
        if(this.face === UP || this.isMatch) {
            rect(this.x, this.y, this.width, this.height, 8);
            image(this.cardFaceImg, this.x, this.y, this.width, this.height);
        } else {
            rect(this.x, this.y, this.width, this.height, 8);
            image(cardBack, this.x, this.y, this.width, this.height);
        }
    }

    didHit (mouseX, mouseY) {
        if (mouseX >= this.x && mouseX <= this.x + this.width &&
             mouseY >= this.y && mouseY <= this.y + this.height) {
            this.flip();
            return true;
        } else {
            return false;
        }
    }

    flip () {
        if (this.face === DOWN) {
            this.face = UP;
        } else {
            this.face = DOWN;
        }
        this.show();
    }
}
 
function shuffleArray (array) {
    let counter = array.length;
    while (counter > 0) {
        const idx = Math.floor(Math.random() * counter);
        counter--;
        const temp = array[counter];
        array[counter] = array[idx];
        array[idx] = temp;
    }
    return array;
}