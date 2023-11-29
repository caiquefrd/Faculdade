function notaFinal(conceitos) {
  let somatorio = 0;

  for (let i = 0; i < conceitos.length; i++) {
    somatorio += conceitos[i].nota * conceitos[i].peso;
  }
  return somatorio;
}

const conceitos = [
  { avaliacao: "P1", nota: 9.1, peso: 0.1 },
  { avaliacao: "P2", nota: 6.5, peso: 0.15 },
  { avaliacao: "P3", nota: 7.2, peso: 0.25 },
  { avaliacao: "Atividades", nota: 4.5, peso: 0.1 },
  { avaliacao: "API", nota: 4.5, peso: 0.1 },
];
console.log("Média final:", notaFinal(conceitos));
