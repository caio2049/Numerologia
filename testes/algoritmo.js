"use strict";

// 1 - tirar espaços do nome, para permitir calcular sequencialmente
// 2 - colocar o nome todo, já juntado, em maiúsculas
// 3 - fazer a soma das letras com seu dígito correspondente
// 4 - reduzir para um único dígito ou número mestre
// 5 - mostrar mensagem com características

let nome = "Caio Chaves da Silva";

// 1 - tirar espaços do nome, para permitir calcular sequencialmente
let nomeSemEspacos = nome.replace(/\s+/g, "");
console.log(nomeSemEspacos);

// 2 - colocar o nome todo, já juntado, em maiúsculas
nomeSemEspacos = nomeSemEspacos.toUpperCase();
console.log(nomeSemEspacos);

// 3 + testando iteração
let somaNome = 0;
for (let i = 0; i < nomeSemEspacos.length; i++) {
  let letra = nomeSemEspacos[i];

  // console.log(letra);

  switch (letra) {
    case "A" || "J" || "S":
      console.log(letra, 1);
      somaNome += 1;
      break;
    case "B" || "K" || "T":
      console.log(letra, 2);
      somaNome += 2;
      break;
    case "C" || "L" || "U":
      console.log(letra, 3);
      somaNome += 3;
      break;
    case "D" || "M" || "V":
      console.log(letra, 4);
      somaNome += 4;
      break;
    case "E" || "N" || "W":
      console.log(letra, 5);
      somaNome += 5;
      break;
    case "F" || "O" || "X":
      console.log(letra, 6);
      somaNome += 6;
      break;
    case "G" || "P" || "Y":
      console.log(letra, 7);
      somaNome += 6;
      break;
    case "H" || "Q" || "Z":
      console.log(letra, 8);
      somaNome += 6;
      break;
    case "I" || "R":
      console.log(letra, 9);
      somaNome += 6;
      break;
    default:
      somaNome += 0;
  }
}

console.log(somaNome);

// 4 - reduzir para um único dígito ou número mestre
function reduzirNumero(num) {
  // Converte o número para string e separa os dígitos
  let digitos = String(num).split("");

  // Usa reduce para somar os dígitos
  let soma = digitos.reduce(
    (acumulador, digito) => acumulador + Number(digito),
    0
  );

  // Condição para não reduzir se a soma for 11, 22 ou 33
  const valoresNaoReduzidos = [11, 22, 33];

  // Se a soma não estiver na lista de valores não reduzidos e for maior que 9, repete o processo
  while (soma > 9 && !valoresNaoReduzidos.includes(soma)) {
    digitos = String(soma).split("");
    soma = digitos.reduce(
      (acumulador, digito) => acumulador + Number(digito),
      0
    );
  }

  return soma;
}

// Mostrando dígito
console.log(reduzirNumero(somaNome));
