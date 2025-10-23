function maiorNumero(a, b, c) {
  if (a >= b && a >= c) {
    return a;
  } else if (b >= a && b >= c) {
    return b;
  } else {
    return c;
  }
}

function ordenarCrescente(a, b, c) {
  let numeros = [a, b, c];
  numeros.sort(function(x, y) {
    return x - y;
  });
  return numeros;
}

function ehPalindromo(texto) {
  let str = texto.toUpperCase().replace(/\s+/g, '');
  let invertida = str.split('').reverse().join('');
  return str === invertida;
}

function tipoDeTriangulo(a, b, c) {
  if (a < b + c && b < a + c && c < a + b) {
    if (a === b && b === c) {
      return "Triângulo Equilátero (todos os lados iguais)";
    } else if (a === b || a === c || b === c) {
      return "Triângulo Isósceles (dois lados iguais)";
    } else {
      return "Triângulo Escaleno (todos os lados diferentes)";
    }
  } else {
    return "Os valores informados não formam um triângulo.";
  }
}

// Primeira e Segunda Função
let num1 = parseFloat(prompt("Digite o primeiro número:"));
let num2 = parseFloat(prompt("Digite o segundo número:"));
let num3 = parseFloat(prompt("Digite o terceiro número:"));

let maior_num = maiorNumero(num1, num2, num3);
let num_ordenados = ordenarCrescente(num1, num2, num3);

console.log("O maior número é:", maior_num);
alert("O maior número é: " + maior_num);

console.log("Os números em ordem crescente são:", num_ordenados);
alert("Os números em ordem crescente são: " + num_ordenados.join(", "));

// Terceira Função
let entrada = prompt("Digite uma palavra ou frase:");
if (ehPalindromo(entrada)) {
  alert("É um palíndromo!");
  console.log("É um palíndromo!");
} else {
  alert("Não é um palíndromo!");
  console.log("Não é um palíndromo!");
}

// Quarta Função
let lado1 = parseFloat(prompt("Digite o primeiro lado:"));
let lado2 = parseFloat(prompt("Digite o segundo lado:"));
let lado3 = parseFloat(prompt("Digite o terceiro lado:"));

let resultado = tipoDeTriangulo(lado1, lado2, lado3);
alert(resultado);
console.log(resultado);
