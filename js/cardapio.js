// Função para incrementar o contador
function incrementar() {
    const counterDisplay = document.getElementById("counter");
    let valorAtual = parseInt(counterDisplay.textContent);
    valorAtual++;
    counterDisplay.textContent = valorAtual;
}

function decremento() {
    const counterDisplay = document.getElementById("counter");
    let valorAtual = parseInt(counterDisplay.textContent);
    if (valorAtual > 0) {
        valorAtual--;
    }
    counterDisplay.textContent = valorAtual;
}

// Adiciona event listeners aos botões
document.addEventListener("DOMContentLoaded", function() {
    const incrementButton = document.getElementById("increment-button");
    const decrementButton = document.getElementById("decrement-button");

    if (incrementButton) {
        incrementButton.addEventListener("click", incrementar);
    }

    if (decrementButton) {
        decrementButton.addEventListener("click", decremento);
    }

});
