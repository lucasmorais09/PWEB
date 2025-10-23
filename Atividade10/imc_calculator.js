function calcularIMC(peso, altura) {
    let imc = peso / (altura * altura);
    return imc;
}

function classificarIMC(imc) {
    if (imc < 18.5) {
    return "Abaixo do peso";
    } else if (imc < 24.9) {
    return "Peso normal";
    } else if (imc < 29.9) {
    return "Sobrepeso";
    } else if (imc < 34.9) {
    return "Obesidade grau I";
    } else if (imc < 39.9) {
    return "Obesidade grau II";
    } else {
    return "Obesidade grau III (mórbida)";
    }
}

// Entrada de dados
let altura = parseFloat(prompt("Digite sua altura em metros (ex: 1.75):"));
let peso = parseFloat(prompt("Digite seu peso em kg (ex: 70):"));

// Cálculo e exibição
let imc = calcularIMC(peso, altura);
let classificacao = classificarIMC(imc);

alert("Seu IMC é: " + imc.toFixed(2) + "\nClassificação: " + classificacao);
console.log("IMC:", imc.toFixed(2), "| Classificação:", classificacao);