// function exer7() {
//     p = document.createElement("p");
//     txt = document.createTextNode(document.querySelector("#entrada").value);
//     p.appendChild(txt);
//     document.querySelector("#saida").value = saida;
//     saida.appendChild(p);
//     ttl = document.createAttribute("title");
//     ttl.value = document.querySelector("#entrada").value;
//     p.setAttributeNode(ttl)
// }

function exer7() {
    li = document.createElement("li");
    txt = document.createTextNode(document.querySelector("#entrada").value);
    li.appendChild(txt);
    document.querySelector("#saida").value = saida;
    saida.appendChild(li);
    ttl = document.createAttribute("title");
    ttl.value = document.querySelector("#entrada").value;
    li.setAttributeNode(ttl)
}