function exer7() {
  ol = document.querySelector("#saida");
  li = document.createElement("li");
  texto = document.createTextNode(document.querySelector("#entrada").value);
  ol.appendChild(li);
  li.appendChild(texto);
  ttl = document.createAttribute("title");
  ttl.value = document.querySelector("#entrada").value;
  li.setAttributeNode(ttl);
}
