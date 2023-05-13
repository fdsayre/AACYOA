let stages = {
    start: {
        question: 'Welcome to the hallowed (and sometimes haunted) halls of Academia. Where do you start?',
        choices: ['Undergrad', 'Graduate Student', 'Tenure Track Faculty']
    },
    Undergrad: {
        question: 'Undergrad life! What will it be tonight?',
        choices: ['Party', 'Study']
    },
    'Graduate Student': {
        question: 'Your thesis is due, and the allure of a nap is strong. What will you do?',
        choices: ['Work on Thesis', 'Take a Nap']
    },
    'Tenure Track Faculty': {
        question: 'Publish or perish. What\'s your call?',
        choices: ['Publish', 'Perish']
    },
    Party: {
        question: 'Choose your academic discipline',
        choices: ['Physics', 'Biology', 'Computer Science', 'Fine Arts']
    },
    Study: {
        question: 'Choose your academic discipline',
        choices: ['Physics', 'Biology', 'Computer Science', 'Fine Arts']
    },
    'Work on Thesis': {
        question: 'Choose your academic discipline',
        choices: ['Physics', 'Biology', 'Computer Science', 'Fine Arts']
    },
    'Take a Nap': {
        question: 'Choose your academic discipline',
        choices: ['Physics', 'Biology', 'Computer Science', 'Fine Arts']
    },
    Publish: {
        question: 'Choose your academic discipline',
        choices: ['Physics', 'Biology', 'Computer Science', 'Fine Arts']
    },
    Perish: {
        question: 'You\'ve died of dysentery.',
        choices: []
    },
    Physics: {
        question: 'Your challenge: unravel the mysteries of the universe. What will you do?',
        choices: ['Solve the String Theory', 'Find the Theory of Everything']
    },
    Biology: {
        question: 'You\'re on the brink of a breakthrough. What will you do?',
        choices: ['Cure Cancer', 'Discover a New Species']
    },
    'Computer Science': {
        question: 'The future is in your hands! What will you do?',
        choices: ['Build the Next Social Media App', 'Invent a New AI']
    },
    'Fine Arts': {
        question: 'The soul of human expression! What will you do?',
        choices: ['Paint a Masterpiece', 'Perform a Groundbreaking Play']
    },
    'Solve the String Theory': {
        question: 'Congratulations, you\'ve decided to further torment yourself. You\'re getting another PhD.',
        choices: []
    },
    'Find the Theory of Everything': {
        question: 'You did it! You\'re appointed as Provost!',
        choices: []
    },
    'Cure Cancer': {
        question: 'Congratulations, you\'ve decided to further torment yourself. You\'re getting another PhD.',
        choices: []
    },
    'Discover a New Species': {
        question: 'Oh no! You\'ve died of dysentery.',
        choices: []
    },
    'Build the Next Social Media App': {
        question: 'You\'ve had enough of academia\'s rigidity and bureaucracy. You\'ve decided to work for a startup!',
        choices: []
    },
    'Invent a New AI': {
        question: 'You did it! You\'re appointed as Provost!',
        choices: []
    },
    'Paint a Masterpiece': {
        question: 'You\'ve had enough of academia\'s rigidity and bureaucracy. You\'ve decided to work for a startup!',
        choices: []
    },
    'Perform a Groundbreaking Play': {
        question: 'Congratulations, you\'ve decided to further torment yourself. You\'re getting another PhD.',
        choices: []
    }
};

let currentStage = 'start';

function showStage() {
    let stage = stages[currentStage];

    let questionElem = document.getElementById('question');
    questionElem.innerText = stage.question;

    let choiceContainerElem = document.getElementById('choice-container');
    choiceContainerElem.innerHTML = '';

    for (let choice of stage.choices) {
        let buttonElem = document.createElement('button');
        buttonElem.innerText = choice;
        buttonElem.addEventListener('click', function() {
            currentStage = choice;
            showStage();
        });

        choiceContainerElem.appendChild(buttonElem);
    }
}

showStage();
