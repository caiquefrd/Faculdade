function abrir() {
  num = parseInt(prompt("entre com o numero"));
  sucessor = num + 1;
  antecessor = num - 1;
  window.alert(`antecessor ${antecessor} sucessor ${sucessor}`);
}

function produto() {
  prod = prompt("entre com o produto");
  price = prompt("entre com o preço")
  window.alert(`produto ${prod} preço ${price}`)
}