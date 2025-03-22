// This grabs the 'personalities' and 'questions' objects from the data.js file.
import { personalities } from "./data.js";
import { questions } from "./data.js";

// This keeps track of which question we're on
let currentQuestion = 0;

// Let's complete this function
function loadQuestion(ID) {
    // The loadQuestion function should update the text, images, and buttons of the question with the ID given.
    
    // Step 1
    let questionText = document.getElementById('question-text');
    
    // Step 2
    questionText.innerHTML = questions[ID].text;
    
    // Step 6
    
    for (const [choice, personality] of Object.entries(questions[ID].choices)) {
        // Step 3
        
        // Step 4
        
        // Step 5
        
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

    const text = document.getElementById('question-text');
    const questionImage = document.getElementById('question-image');
    const choicesContainer = document.getElementById('choices');
    const catImagePath = `lil_images/cats/${maxCat}.png`;

    const img = new Image();
    img.src = catImagePath;
    img.className = 'responsive-image';

    // Once the image is loaded, update the DOM
    img.onload = () => {
        questionImage.src = img.src;
        choicesContainer.style.display = 'none';

        text.textContent = `drumroll... here are your results! (Right click or hold the image to save)`;
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
console.log(questions);
window.startGame = startGame;