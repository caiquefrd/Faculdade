function exer8() {
    if (document.querySelector("#entrada").value) {
        let li = document.createElement("li");
        let txt = document.createTextNode(document.querySelector("#entrada").value);
        li.appendChild(txt);
        document.querySelector("#saida").value = saida;
        saida.appendChild(li);
        let ttl = document.createAttribute("title");
        ttl.value = document.querySelector("#entrada").value;
        li.setAttributeNode(ttl)
    }
}