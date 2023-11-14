function exer8() {
    if (document.querySelector("#entrada").value) {
        let li = document.createElement("li");
        let entrada = document.querySelector("#entrada").value;
        let saidaText = document.createTextNode(entrada);
        let titleText = document.createAttribute("title");
        titleText.value = entrada;
        li.setAttributeNode(titleText);
        document.querySelector("#saida").appendChild(li);
        li.appendChild(saidaText);
        li.setAttributeNode(titleText);
    }

}