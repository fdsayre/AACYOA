const questionElement = document.getElementById('question');
const choicesElement = document.getElementById('choices');

const states = {
    start: {
        question: "Choose your academic path:",
        choices: ["Undergrad", "Graduate Student", "Tenure Track Faculty"],
        next: ["undergrad", "grad", "faculty"],
    },
    undergrad: {
        question: "Late night party or late night study?",
        choices: ["Party", "Study"],
        next: ["dysentery", "discipline"],
    },
    grad: {
        question: "Work on your thesis or take a nap?",
        choices: ["Thesis", "Nap"],
        next: ["discipline", "dysentery"],
    },
    faculty: {
        question: "Publish or perish?",
        choices: ["Publish", "Perish"],
        next: ["discipline", "dysentery"],
    },
    discipline: {
        question: "Choose your academic discipline:",
        choices: ["Physics", "Biology", "Computer Science", "Fine Arts"],
        next: ["physics", "biology", "computer_science", "fine_arts"],
    },
    physics: {
        question: "Solve the string theory or the theory of everything?",
        choices: ["String theory", "Theory of everything"],
        next: ["phd", "provost"],
    },
    biology: {
        question: "Cure cancer or discover a new species?",
        choices: ["Cure cancer", "New species"],
        next: ["provost", "dysentery"],
    },
    computer_science: {
        question: "Build the next social media app or invent new AI?",
        choices: ["Social media app", "New AI"],
        next: ["startup", "phd"],
    },
    fine_arts: {
        question: "Paint a masterpiece or perform a groundbreaking play?",
        choices: ["Masterpiece", "Groundbreaking play"],
        next: ["provost", "startup"],
    },
    dysentery: {
        question: "You died of dysentery. Too much stress, not enough rest.",
        choices: ["Play again?"],
        next: ["start"],
    },
    provost: {
        question: "Congratulations, you're appointed as Provost! Maybe now you'll have some free time?",
        choices: ["Play again?"],
        next: ["start"],
    },
    startup: {
        question: "You've decided to leave academia for a startup. Welcome to another kind of stress!",
        choices: ["Play again?"],
        next: ["start"],
    },
    phd: {
        question: "Congratulations, you've decided to pursue another PhD. Are you a masochist?",
        choices: ["Play again?"],
        next: ["start"],
    },
};

let currentState = "start";

function render() {
    const state = states[currentState];
    questionElement.innerText = state.question;
    choicesElement.innerHTML = '';
    for (let i = 0; i < state.choices.length; i++) {
        const choice = document.createElement('div');
        choice.className = 'choice';
        choice.innerText = state.choices[i];
        choice.addEventListener('click', function() {
            currentState = state.next[i];
            render();
        });
        choicesElement.appendChild(choice);
    }
}

render();
