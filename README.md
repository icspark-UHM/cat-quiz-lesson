# Little Quiz

## Dynamic Button Addition

In this project, we'll be going through how to dynamically add buttons to a personality quiz!

## Step-by-Step Guide

### Understand how the code works

```javascript
const questions = {
  id:0, // first "default" state
  text: "What is the best way to relax?",
  image: "lil_images/story/relax.png",
  choices: {
    "read a book": ["orange", "iua"],
    "play video games": ["thousand", "angry"],
    "go to the beach": ["oop", "iua"],
    "do absolutely nothing": ["angry", "oop"]
  }
```

This is the data for one of the quiz options, let's break it down.

```javascript
const questions = {
  id: 0, // first "default" state
  }
```
The data for one of the questions is stored in an object called `questions`. The `id` attribute keeps track of the order of the questions (since we start counting at 0, the first is 0)

```javascript
const questions = {
  id: 0, // first "default" state
  text: "What is the best way to relax?",
  image: "lil_images/story/relax.png",
  }
```
The question is stored in the `text` attribute. The image for the question is stored in the `image` attribute.


```javascript
const questions = {
  id: 0, // first "default" state
  text: "What is the best way to relax?",
  image: "lil_images/story/relax.png",
  choices: {
    "read a book": ["orange", "iua"],
    "play video games": ["thousand", "angry"],
    "go to the beach": ["oop", "iua"],
    "do absolutely nothing": ["angry", "oop"]
  }
```

The data for each choice is stored in the `choices` attribute. For each case, the related personalities are listed.

For example `"read a book": ["orange", "iua"]`

`"read a book"` is the choice text. `["orange", "iua"]` is the personalities related.

### Personalities List
This is the code for the personalities.

```javascript
const personalities = {
  "angry": 0,
  "orange": 0,
  "thousand": 0,
  "iua" : 0,
  "oop" : 0,
};
```

## Let's write the code!

We need to fill our page with our question data! We need to make the process reusable so we can use it for any question!

### Make a Function
We're going to make a function that takes each `question` as a parameter.

```javascript
function loadQuestion(question) {
    /* well put our code here */
}
```

### Access the HTML Elements
This is a snippet of the HTML for our page:
```xhtml
<div class="game-container" id="game-container">
    <div class ="question-text" id="question-text"></div>
    <div class="image-container">
      <img id="question-image" src="https://placehold.co/500" alt="Story Image"/>
    </div>
    <div class="choices" id="choices"></div>
  </div>
```
- We need to access the `question-text` element


- We need to access the `question-image` element


- We need to access the `choices` element

Here is an example for the first goal:
```javascript
function loadQuestion(question) {
    const questionText = document.getElementById("question-text")
  
  /* access the question-image */
  
  /* access the choices element */
}
```

### Populate the Element
We need to put our text from question into our `questionText` element. We can access our question's data by using `questions[question]`. We can access our question's text by using `questions[question].text`

We need to:
- Populate the `questionText` element
- Populate the `quesiton-image` element

Populating choices is a bit more complicated so we'll go over that later.

Here is an example for the questionText:

```javascript
function loadQuestion(question) {
    const questionText = document.getElementById("question-text")
  
    /* access the question-image */
  
    /* access the choices element */
  
    questionText.textContent = questions[question].text;
    
    /* populate the question-image element */
}
```

### Add the Choices
We need to add each choice in the `choices` attribute of our `question` object. We also need to loop through each choice and access the `personalities` associated with it.

Since it can be a little confusing I'll give the first line of the loop.

```javascript
function loadQuestion(question) {
    const questionText = document.getElementById("question-text")
  
    /* access the question-image */
  
    /* access the choices element */
  
    questionText.textContent = questions[question].text;
    
    /* populate the question-image element */

    for (const [choice, personality] of Object.entries(states[question].choices)) {
        /* code goes here */
    }
}
```

We need to create a button for each choice. After the button is created, we need to populate the text of the button. 

To access the correct CSS we need to give it the class `choice-button`.

We need to give the button an on click event that will progress the quiz and pass the associated personalities. This function is already setup as `changeQuestion`.

We also need to append each button to the `choices` section.
```javascript
function loadQuestion(question) {
    const questionText = document.getElementById("question-text")
  
    /* access the question-image */
  
    /* access the choices element */
  
    questionText.textContent = questions[question].text;
    
    /* populate the question-image element */

    for (const [choice, personality] of Object.entries(states[question].choices)) {
      /* create a button element */
      /* populate the text of the button */
      button.className = 'choice-button';
      button.onclick = () => changeQuestion(currentQuestion + 1, personality);
      /* append the button to the choices */
    }
}
```
If it's not working, don't hesitate to ask! After this section is done, you should be ready to take the quiz!

## Conclusion

Congratulations! You've created finished the logic for the quiz and you should be able to take it yourself! If you'd like to create your own quiz for a project, this layout could work!
