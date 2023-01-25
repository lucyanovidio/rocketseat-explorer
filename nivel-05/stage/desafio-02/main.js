const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const fortuneText = document.querySelector("#fortune_text");

const cookieBtn = document.querySelector("#closed_cookie");
const raffleAgainBtn = screen2.querySelector("button");

const fortunePhrases = [
    "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
    "A vida trará coisas boas se tiver paciência.",
    "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.",
    "Não compense na ira o que lhe falta na razão.",
    "Defeitos e virtudes são apenas dois lados da mesma moeda.",
    "A maior de todas as torres começa no solo.",
    "Não há que ser forte. Há que ser flexível.",
    "Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?",
    "Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.",
    "A juventude não é uma época da vida, é um estado de espírito.",
    "Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.",
    "Dê toda a atenção á formação dos seus filhos, sobretudo com bons exemplos da sua própria vida.",
    "Siga os bons e aprenda com eles.",
    "Não importa o tamanho da montanha, ela não pode tapar o sol.",
    "O bom-senso vale mais do que muito conhecimento."
];

cookieBtn.addEventListener("click", raffleFortune);
raffleAgainBtn.addEventListener("click", toggleScreen);
window.addEventListener("keydown", enterClick);

function raffleFortune() {
    let randomNum = Math.round(Math.random() * fortunePhrases.length);
    fortuneText.innerText = fortunePhrases[randomNum];

    toggleScreen();
}

function toggleScreen() {
    screen1.classList.toggle("hide");
    screen2.classList.toggle("hide");
}

function enterClick(e) {
    if (e.key === "Enter" && screen2.classList.contains("hide")) {
        raffleFortune();
    } else if ((e.key === "Enter" || e.key === "Escape") && screen1.classList.contains("hide")) {
        toggleScreen();
    }
}