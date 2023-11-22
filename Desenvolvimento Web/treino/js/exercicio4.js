function exer4(){
    p = document.createElement("p");
    txt = document.createTextNode("Ana Maria");
    p.appendChild(txt);
    document.querySelector("#saida").value = saida;
    saida.appendChild(p)
}