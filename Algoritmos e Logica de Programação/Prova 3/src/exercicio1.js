function notaAjustada(notas) {
  let menor = notas[0];

  for (let i = 1; i < notas.length; i++) {
    if (notas[i] < menor) {
      menor = notas[i];
    }
  }
  for (let i = 0; i < notas.length; i++) {
    if (notas[i] == menor) {
      notas[i] = 6;
      break;
    }
  }
  return notas;
}

const notas = [9.1, 6.5, 7.2, 4.5, 8.1];
console.log("Notas ajustadas:", notaAjustada(notas));
