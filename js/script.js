// this converts the HTML elements into usable variables
const shrub1 = document.getElementById('bush1');
const shrub2 = document.getElementById('bush2');
const shrub3 = document.getElementById('bush3');
const startButton = document.getElementById('start');

// these images will appear when the shrubs are poked/left alone
const bearSurprise = 'images/ccb-favicon-01.png';
const foxSurprise = 'images/ccb-fox.png';
const skunkSurprise = 'images/ccb-skunk.png';
const greenShrub = 'images/green-shrub.png';

// these variables are used in the randomShrubGenerator function
let numGreenShrubs = 3;
let pokedShrub1;
let pokedShrub2;
let pokedShrub3;

// the click functions, below, depend on this being true; the shrubs become unclickable once the gameOver function triggers the false state
let currentlyPlaying = true;

// this checks to see if the bear shrub has been clicked
const isBear = (shrub) => {
    if (shrub.src === bearSurprise) {
      return true;
    } else {
      return false;
    }
};

// this prevents players from clicking each shrub more than once
const isClicked = (shrub) => {
    if (shrub.src === greenShrub) {
      return false;
    } else {
      return true;
    }
};

// this decreases the number of undisturbed shrubs and checks to see if the game is over
const chooseShrub = (shrub) => {
  numGreenShrubs--;
  if (numGreenShrubs === 0) {
    gameOver('win');
  } else if (isBear(shrub)) {
    gameOver();
  } 
};

//this randomly assigns the image that will appear when the shrubs are poked
const randomShrubGenerator = () => {
    const shrubOption = Math.floor(Math.random() * numGreenShrubs);
    if (shrubOption === 0) {
      pokedShrub1 = bearSurprise;
      pokedShrub2 = skunkSurprise;
      pokedShrub3 = foxSurprise;
    } else if (shrubOption === 1) {
      pokedShrub2 = bearSurprise;
      pokedShrub1 = foxSurprise;
      pokedShrub3 = skunkSurprise;
    } else if (shrubOption === 2) {
      pokedShrub3 = bearSurprise;
      pokedShrub2 = foxSurprise;
      pokedShrub1 = skunkSurprise;
    }
};

// these click functions reveal the randomized animals if it's true that the game should still be ongoing and the door hasn't already been clicked

// shrub1.onclick = () => {
//     // if (currentlyPlaying === true && !isClicked(shrub1)) {
//     if (currentlyPlaying === true) {
//       shrub1.src = pokedShrub1;
//       chooseShrub(shrub1);
//     }
//     // shrub1.src = pokedShrub1;
//     console.log('You clicked shrub 1!');
// };
// shrub2.onclick = () => {
//     // if (currentlyPlaying === true && !isClicked(shrub2)) {
//     if (currentlyPlaying === true) {
//       shrub2.src = pokedShrub2;
//       chooseShrub(shrub2);
//     }
//     console.log('You clicked shrub 2!');
// };
// shrub3.onclick = () => {
//     // if (currentlyPlaying === true && !isClicked(shrub3)) {
//     if (currentlyPlaying === true) {
//       shrub3.src = pokedShrub3;
//       chooseShrub(shrub3);
//     }
//     console.log('You clicked shrub 3!');
// };

shrub1.onclick = () => {
    console.log('You clicked shrub 1!');
    console.log(currentlyPlaying);
    if (currentlyPlaying === true && !isClicked(shrub1)) {
      shrub1.src = pokedShrub1;
      chooseShrub(shrub1);
    }
};
shrub2.onclick = () => {
    console.log('You clicked shrub 2!');
    if (currentlyPlaying === true && !isClicked(shrub2)) {
      shrub2.src = pokedShrub2;
      chooseShrub(shrub2);
    }
};
shrub3.onclick = () => {
    console.log('You clicked shrub 3!');
    if (currentlyPlaying === true && !isClicked(shrub3)) {
      shrub3.src = pokedShrub3;
      chooseShrub(shrub3);
    }
};

// the startButton click event relies on the startRound function
startButton.onclick = () => {
    if (currentlyPlaying === false) {
        startRound();
    }
};

// this resets the game values
const startRound = () => {
    shrub1.src = greenShrub;
    shrub2.src = greenShrub;
    shrub3.src = greenShrub;
    numGreenShrubs = 3;
    startButton.innerHTML = 'Good Luck!';
    currentlyPlaying = true;
    randomShrubGenerator();
};

// this helps the chooseShrub function end the game
const gameOver = (status) => {
    if (status === 'win') {
      startButton.innerHTML = 'You win! Play again?';
    } else {
      startButton.innerHTML = 'Game over! Play again?'
    }
    currentlyPlaying = false;
};

startRound();