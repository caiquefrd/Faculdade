function exer6(){
    p = document.createElement("p");
    txt = document.createTextNode(document.querySelector("#entrada").value);
    p.appendChild(txt);
    document.querySelector("#saida").value = saida;
    saida.appendChild(p);
    ttl = document.createAttribute("title");
    ttl.value = "Nome Fornecido";
    p.setAttributeNode(ttl)
}