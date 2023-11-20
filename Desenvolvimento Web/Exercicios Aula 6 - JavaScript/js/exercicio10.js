function exer10(){
    if(document.querySelector("#entrada").value){
        let li = document.createElement("li");
        let entrada = document.querySelector("#entrada").value;
        let saidaText = document.createTextNode(entrada);
        let titleText = document.createAttribute("title");
        titleText.value = entrada;
        li.setAttributeNode(titleText);
        document.querySelector("#saida").appendChild(li);
        li.appendChild(saidaText);
        li.setAttributeNode(titleText);
        let exibir = document.createAttribute("onclick");
        exibir.value = "exibir()"
        li.setAttributeNode(exibir);
        
    }
    var total = document.querySelectorAll("li");
    document.querySelector("#total").innerHTML = total.length;
}

function exibir(){ alert("Exibindo"); }