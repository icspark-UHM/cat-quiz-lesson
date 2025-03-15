import { personalities } from "./data.js";
import { states } from "./data.js";

/* this keeps track of which question we're on */
let currentQuestion = 0;

/* we pass a question to our loadQuestion function */
function loadQuestion(question) {
    /* we need to have a variable that keeps track of the element called 'story-text' */
    /* here is the first one */
    const questionText = document.getElementById("question-text");
    /* we need a variable that keeps track of an element called 'story-image' */

    /* we need a variable that keeps track of an element called 'choices' */

    /* let's set the story images element source to states[question].image */

    /* we need to set the story-text elements text to the questions text */

    /* we need to clear the choices div to make sure no other choices are there */

    /* if you want to know more about the Image() object, just ask! */

    /* we need to loop for each choice in the states[question].choices and loop within choice to get each personality*/
    for (const [choice, personality] of Object.entries(states[question].choices)) {
        /* we need to create an element called 'button' */
        /* code here */
        const button = document.createElement('button');
        /* our button's textContent needs to be equal to choice */
        /* code here */
        button.textContent = choice;
        /* to get the correct css we need to give our button the class 'choice-button' */
        button.className = 'choice-button';

        button.onclick = () => changeQuestion(currentQuestion + 1, personality); //each time you change state you update the personalities dictionary
        choicesContainer.appendChild(button);
    }
}

function changeQuestion(newQuestion, cats) {
    console.log("state is: " + newQuestion);
    cats.forEach(cat => {
        personalities[cat]++;
        console.log(cat + personalities[cat]);
    });

    currentQuestion = newQuestion;

    if (currentQuestion === 6) {
        endGame();
    } else {
        loadQuestion(currentQuestion);
    }
}

function endGame() {
    let maxCount = 0;
    let maxCat = '';

    for (const [cat, count] of Object.entries(personalities)) {
        if (count > maxCount) {
            maxCount = count;
            maxCat = cat;
        }
    }

    console.log(maxCat);

    const text = document.getElementById('story-text');
    const storyImage = document.getElementById('story-image');
    const choicesContainer = document.getElementById('choices');
    const catImagePath = `lil_images/cats/${maxCat}.png`;

    const img = new Image();
    img.src = catImagePath;
    img.className = 'responsive-image';

    // Once the image is loaded, update the DOM
    img.onload = () => {
        storyImage.src = img.src;
        choicesContainer.style.display = 'none';

        text.textContent = `drumroll... you are a ${maxCat}! wow! (Right click or hold the image to save)`;
    }

}

function startGame() {
    document.querySelector('.title').style.display = 'none';
    document.getElementById('homescreen').style.display = 'none';
    document.querySelector('.start-button').style.display = 'none';
    document.getElementById('game-container').style.display = 'flex';
    loadQuestion(currentQuestion);
}


console.log("Welcome to the Personality Quiz!");
console.log(personalities);
console.log(states);
window.startGame = startGame;