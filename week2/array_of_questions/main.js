// array of objects
const questionsAndAnswers = [
    {
        question: "Forward I am heavy, but backward I am not. What am I?",
        answer: "The word NOT"
    },
    {
        question: "What has words, but never speaks?",
        answer:"A book",
    },
    {
        question: "What is cut on a table, but is never eaten?",
        answer:"A deck of cards",
    },
    {
        question: "If two’s company, and three’s a crowd, what are four and five?",
        answer:"Nine",
    }
];

// question randomizer
console.log(Math.floor(Math.random() * 4));
const randomNumber = Math.floor(Math.random() * questionsAndAnswers.length);

// user answer w/correct answer
const answer = window.prompt(questionsAndAnswers[randomNumber].question);
window.alert("You answered " + answer + "." + " The correct answer was " + questionsAndAnswers[randomNumber].answer + ".");