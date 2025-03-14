import { personalities } from "./data.js";
import { states } from "./data.js";

let currentState = 0;

function renderState(state) {
    const storyText = document.getElementById('story-text');
    const storyImage = document.getElementById('story-image');
    const choicesContainer = document.getElementById('choices');

    const img = new Image();
    img.src = states[state].image;

    img.onload = () => {
        storyImage.src = img.src;
        storyText.textContent = states[state].text;
        choicesContainer.innerHTML = '';

        for (const [choice, info] of Object.entries(states[state].choices)) {
            const button = document.createElement('button');
            button.textContent = choice;
            button.className = 'choice-button';
            button.onclick = () => changeState(currentState + 1, info); //each time you change state you update the personalities dictionary
            choicesContainer.appendChild(button);
        }
    };
}

function changeState(newState, cats) {
    console.log("state is: " + newState);
    cats.forEach(cat => {
        personalities[cat]++;
        console.log(cat + personalities[cat]);
    });


    currentState = newState;

    if (currentState === 6) {
        endGame();
    } else {
        renderState(currentState);
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
        storyImage.style.display = 'none';
        choicesContainer.style.display = 'none';

        text.textContent = `Drumroll... YOU ARE A ${maxCat}! WOAH! (Right click or hold the image to save)`;
        text.appendChild(img);
    }

}

function startGame() {
    document.querySelector('.title').style.display = 'none';
    document.getElementById('homescreen').style.display = 'none';
    document.querySelector('.start-button').style.display = 'none';
    document.getElementById('game-container').style.display = 'flex';
    renderState(currentState);
}


console.log("Welcome to the Personality Quiz!");
console.log(personalities);
console.log(states);
window.startGame = startGame;