//Alterar o código do Exercício 7 para ser adicionado somente se existir algum caractere no campo de entrada.

function exer8() {
    if (document.querySelector("#entrada").value) {
        let li = document.createElement("li");
        let entrada = document.querySelector("#entrada").value;
        let saidaText = document.createTextNode(entrada);
        let titleText = document.createAttribute("title");
        titleText.value = entrada; b 
        li.setAttributeNode(titleText);
        document.querySelector("#saida").appendChild(li);
        li.appendChild(saidaText); 
        li.setAttributeNode(titleText);
    }

}