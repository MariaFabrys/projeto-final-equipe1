// Função para incrementar o contador
function incrementar(event) {
    const button = event.target;
    const counterDisplay = button.parentElement.querySelector(".counter");
    let valorAtual = parseInt(counterDisplay.textContent);
    valorAtual++;
    counterDisplay.textContent = valorAtual;
}

// Função para decrementar o contador
function decrementar(event) {
    const button = event.target;
    const counterDisplay = button.parentElement.querySelector(".counter");
    let valorAtual = parseInt(counterDisplay.textContent);
    if (valorAtual > 0) {
        valorAtual--;
    }
    counterDisplay.textContent = valorAtual;
}

// Adiciona event listeners aos botões após o carregamento completo do DOM
document.addEventListener("DOMContentLoaded", function() {
    const incrementButtons = document.querySelectorAll(".increment-button");
    const decrementButtons = document.querySelectorAll(".decrement-button");

    incrementButtons.forEach(function(button) {
        button.addEventListener("click", incrementar);
    });

    decrementButtons.forEach(function(button) {
        button.addEventListener("click", decrementar);
    });
});
