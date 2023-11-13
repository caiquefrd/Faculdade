{
  // Exercicio1
  function quebrar(nome) {
    return nome.split("");
  }

  let r = quebrar("Pedro");
  console.log("[1]Separado:", r);
}

{
  //Exercicio2
  function quebrar(nome) {
    const v = nome.split("");
    for (let i = 0; i < v.length; i++) {
      if (v[i] == "a") {
        v[i] = "-";
      }
    }
    return v;
  }
  let r = quebrar("Mariana");
  console.log("[2]Separado:", r);
}

{
  //Exercicio3
  function quebrar(nome) {
    const v = nome.split("");
    for (let i = 0; i < v.length; i++) {
      if (
        v[i] == "a" ||
        v[i] == "e" ||
        v[i] == "i" ||
        v[i] == "o" ||
        v[i] == "u"
      ) {
        v[i] = "-";
      }
    }
    return v;
  }
  let r = quebrar("Mariana");
  console.log("Separado:", r);
}

{
  //exercicio4
  function quebrar(nome) {
    let v = nome.split("");
    for (let i = 0; i < v.length; i++) {
      v[i] = "<div>" + v[i] + "<div>";
    }
    return v;
  }

  let r = quebrar("Mariana");
  console.log("Separado:", r);
}

{
  //exercicio5
  function criar(a, b) {
    let v = []; //cria um array vazio
    for (let i = 0; a <= b; i++, a++) {
      (v[i] = a), b;
    }
    return v;
  }
  let r = criar(5, 10);
  console.log("Array:", r);
}

{
  //exercicio6
  function criar(a, b) {
    let v = []; //cria um array vazio
    for (let i = 0; a <= b; i++, a++) {
      v[i] = a + "";
    }
    return v;
  }
  let r = criar(5, 10);
  console.log("Array:", r);
}

{
  //exercicio7
  function somar(a, b) {
    let v = []; //cria um array vazio
    for (let i = 0; i < a; i++) {
      v[i] = a[i] + b[i];
    }
    return;
  }
  let a = [5, 8, 3, 4, 9, 7];
  let b = [3, 5, 9, 2, 3, 4];
  let r = somar(a, b);
  console.log("Soma:", r);
}
