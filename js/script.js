// this converts the HTML elements into usable variables
const shrub1 = document.getElementById('bush-one');
const shrub2 = document.getElementById('bush-two');
const shrub3 = document.getElementById('bush-three');
const startButton = document.getElementById('start');

// these are the images that will appear when the doors open/close
const foxSurprise = '../images/ccb-fox.png';
const skunkSurprise = '../images/ccb-skunk.png';
const bearSurprise = '../images/ccb-favicon-01.png';
const undisturbedShrub = '../images/green-shrub.png';

// these variables are used in the randomShrubGenerator function
let numUndisturbedShrubs = 3;
let pokedShrub1;
let pokedShrub2;
let pokedShrub3;

//this randomly assigns the image that will appear when the shrubs are poked
const randomShrubGenerator = () => {
    const shrubOption = Math.floor(Math.random() * numUndisturbedShrubs);
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