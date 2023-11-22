function exer5(){
    p = document.createElement("p");
    txt = document.createTextNode(document.querySelector("#entrada").value);
    p.appendChild(txt);
    document.querySelector("#saida").value = saida;
    saida.appendChild(p)
}