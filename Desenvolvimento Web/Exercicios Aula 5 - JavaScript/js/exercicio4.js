function exer4( ){
  //cria um elemento tipo <p>
  p = document.createElement("p");
  //cria um texto
  texto = document.createTextNode("Caique");
  //coloca o texto no corpo do elemento <p>
  p.appendChild(texto)
  //obtém o elemento saída
  no = document.querySelector("#saida");
  //adiciona o elemeto <p> no corpo da <div> saída
  no.appendChild(p);
}