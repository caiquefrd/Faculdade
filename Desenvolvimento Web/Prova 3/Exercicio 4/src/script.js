function tabuada() {
  let nro = parseInt(document.getElementById("entrada").value);
  let resposta = document.getElementById("saida");
  let tabuada = "";

  for (let i = 1; i <= 10; i++)
    tabuada += nro + " x " + i + " = " + nro * i + "<br />";

  resposta.innerHTML = tabuada;
}
