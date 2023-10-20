let enter_btn = document.querySelector(".btn");
let inputField = document.querySelector("input"); // Adicione uma referência ao campo de input
let error_message = document.querySelector(".error-message"); // Adicione um elemento para exibir mensagens de erro

enter_btn.addEventListener("click", getFacts);
inputField.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        getFacts();
    }
});

function getFacts() {
    let input = inputField.value;
    let card_title = document.querySelector("h5");
    let card_fato = document.querySelector("h6");
    let card_text = document.querySelector(".textcard");

    if (/^[0-9\/]+$/.test(input)) { // Verifica se a entrada contém apenas números ou barras
        fetch(`http://numbersapi.com/${input}`)
            .then(response => response.text())
            .then(data => {
                card_title.textContent = input;
                card_text.textContent = data;
                error_message.textContent = ''; // Limpa qualquer mensagem de erro anterior
            })
            .catch((err) => console.log(err));
    } else {
        card_title.textContent = "Erro";
        card_fato.textContent = "";
        card_text.textContent = "Por favor, insira apenas números ou barras no campo de input.";
        error_message.textContent = 'Caractere inválido encontrado'; // Exibe uma mensagem de erro
    }
}