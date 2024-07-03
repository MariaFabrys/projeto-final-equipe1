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

      function verificarLargura() {
        var paoSection = document.getElementById("pao");
        if (window.innerWidth < 769) {
          paoSection.style.display = "block";
        } else {
          paoSection.style.display = "none";
        }
      }

      window.addEventListener("load", verificarLargura);
      window.addEventListener("resize", verificarLargura);





