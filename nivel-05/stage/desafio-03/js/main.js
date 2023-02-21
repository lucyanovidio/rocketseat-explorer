// extra: começar com foco, clicar no backdrrop pra fechar, limpeza dos campos, melhoria de nome de variáveis, classes utilitárias, responsividade

import { modal } from "./modal.js";
import { errorAlert } from "./errorAlert.js";
import { calculateIMC, isInvalidEntry } from "./utils.js";

const form = document.querySelector("form");
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");

inputWeight.focus();

inputWeight.addEventListener("input", errorAlert.close);
inputHeight.addEventListener("input", errorAlert.close);    
form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
    e.preventDefault();

    const weight = inputWeight.value;
    const height = inputHeight.value;

    const isWeightOrHeightAnInvalidEntry = isInvalidEntry(weight) || isInvalidEntry(height);

    if (isWeightOrHeightAnInvalidEntry) {
        errorAlert.open();
        return;
    }

    const result = calculateIMC(weight, height);
    displayResultMessage(result);

    inputWeight.value = "";
    inputHeight.value = "";
}

function displayResultMessage(result) {
    const message = `Seu IMC é de ${result}`;
    modal.message.innerText = message;
    modal.open();
}