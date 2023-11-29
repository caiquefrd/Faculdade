function notaAjustadaJSON(pontuacoes) {
  let menor = pontuacoes[0].nota;

  for (let i = 1; i < pontuacoes.length; i++) {
    if (pontuacoes[i].nota < menor) {
      menor = pontuacoes[i].nota;
    }
  }
  for (let i = 0; i < pontuacoes.length; i++) {
    if (pontuacoes[i].nota == menor) {
      pontuacoes[i].nota = 6;
      break;
    }
  }
  return pontuacoes;
}

const pontuacoes = [
  { avaliacao: "P1", nota: 9.1 },
  { avaliacao: "P2", nota: 6.5 },
  { avaliacao: "P3", nota: 7.2 },
  { avaliacao: "Atividades", nota: 4.5 },
  { avaliacao: "API", nota: 4.5 },
];

console.log("Notas ajustadas:", notaAjustadaJSON(pontuacoes));
