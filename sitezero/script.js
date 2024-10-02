const choices = document.querySelectorAll('.choice');
const resultDisplay = document.getElementById('result');
const resetBtn = document.getElementById('resetBtn');

choices.forEach(choice => {
    choice.addEventListener('click', () => {
        const userChoice = choice.id;
        const computerChoice = getComputerChoice();
        const result = determineWinner(userChoice, computerChoice);
        displayResult(userChoice, computerChoice, result);
    });
});

resetBtn.addEventListener('click', resetGame);

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    return ['pierre', 'papier', 'ciseaux'][randomNumber];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "Égalité !";
    } else if (
        (userChoice === 'pierre' && computerChoice === 'ciseaux') ||
        (userChoice === 'papier' && computerChoice === 'pierre') ||
        (userChoice === 'ciseaux' && computerChoice === 'papier')
    ) {
        return "Vous avez gagné !";
    } else {
        return "L'ordinateur a gagné !";
    }
}

function displayResult(userChoice, computerChoice, result) {
    resultDisplay.innerHTML = `
        Vous avez choisi: <strong>${userChoice}</strong><br>
        L'ordinateur a choisi: <strong>${computerChoice}</strong><br>
        Résultat: <strong>${result}</strong>
    `;
}

function resetGame() {
    resultDisplay.innerHTML = '';
}
