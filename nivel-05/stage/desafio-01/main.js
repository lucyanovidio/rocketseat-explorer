// Variáveis
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const incorrectAnswerMsg = screen1.querySelector(".incorrect_answer");
const screen2Text = screen2.querySelector("h2");
const input = screen1.querySelector("input");
const tryGuessingBtn = screen1.querySelector("button");
const tryAgainBtn = screen2.querySelector("button");
let randomNum = Math.round(Math.random() * 10);
let xAttempts = 1;

// Eventos
input.focus();
tryGuessingBtn.addEventListener("click", handleGuessing);
tryAgainBtn.addEventListener("click", handleTryingAgain);
window.addEventListener("keypress", enterClick);

// Funções
function handleGuessing(event) {
    event.preventDefault();

    let userNumber = input;

    // Validação
    if (userNumber.value === "") {
        alert("Escoha um número.");
        input.focus();
        return;
    } else if (Number(userNumber.value) < 0 || Number(userNumber.value) > 10) {
        alert("Número inválido. Escolha um entre 0 e 10.");
        input.focus();
        return;
    }

    let char;
    xAttempts === 1 ? char = "!" : char = "s!";

    // O programa
    if (Number(userNumber.value) === randomNum) {
        screen2Text.innerText = `Acertou em ${xAttempts} tentativa${char}`;
        toggleScreen();

        userNumber.value = "";
        incorrectAnswerMsg.classList.add("hide");
        xAttempts = 0;
    } else {
        userNumber.value = "";
        input.focus();
        
        incorrectAnswerMsg.classList.remove("hide");
    }
    
    xAttempts++;
}

function handleTryingAgain() {
    randomNum = Math.round(Math.random() * 10);
    console.log(randomNum);

    toggleScreen();
    input.focus();
}

function toggleScreen() {
    screen1.classList.toggle("hide");
    screen2.classList.toggle("hide");
}

function enterClick(event) {
    if (event.key === "Enter" && screen1.classList.contains("hide")) {
        handleTryingAgain();
    }
}