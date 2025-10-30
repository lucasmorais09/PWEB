// 1.
function Retangulo(x, y) {
  this.base = x;
  this.altura = y;

  this.calcularArea = function() {
    return this.base * this.altura;
  };
}

let base = parseFloat(prompt("Digite a base do retângulo:"));
let altura = parseFloat(prompt("Digite a altura do retângulo:"));

let ret = new Retangulo(base, altura);

console.log("Área do Retângulo:", ret.calcularArea());

// 2.
class Conta {
  constructor(nomeCorrentista, banco, numeroConta, saldo) {
    this._nomeCorrentista = nomeCorrentista;
    this._banco = banco;
    this._numeroConta = numeroConta;
    this._saldo = saldo;
  }

  get nomeCorrentista() { return this._nomeCorrentista; }
  set nomeCorrentista(valor) { this._nomeCorrentista = valor; }

  get banco() { return this._banco; }
  set banco(valor) { this._banco = valor; }

  get numeroConta() { return this._numeroConta; }
  set numeroConta(valor) { this._numeroConta = valor; }

  get saldo() { return this._saldo; }
  set saldo(valor) { this._saldo = valor; }
}

class Corrente extends Conta {
  constructor(nomeCorrentista, banco, numeroConta, saldo, saldoEspecial) {
    super(nomeCorrentista, banco, numeroConta, saldo);
    this._saldoEspecial = saldoEspecial;
  }

  get saldoEspecial() { return this._saldoEspecial; }
  set saldoEspecial(valor) { this._saldoEspecial = valor; }
}

class Poupanca extends Conta {
  constructor(nomeCorrentista, banco, numeroConta, saldo, juros, dataVencimento) {
    super(nomeCorrentista, banco, numeroConta, saldo);
    this._juros = juros;
    this._dataVencimento = dataVencimento;
  }

  get juros() { return this._juros; }
  set juros(valor) { this._juros = valor; }

  get dataVencimento() { return this._dataVencimento; }
  set dataVencimento(valor) { this._dataVencimento = valor; }
}
// Conta Corrente
let nomeC = prompt("Digite o nome do correntista (Conta Corrente):");
let bancoC = prompt("Digite o banco:");
let numeroContaC = prompt("Digite o número da conta:");
let saldoC = parseFloat(prompt("Digite o saldo:"));
let saldoEsp = parseFloat(prompt("Digite o saldo especial:"));

let contaCorrente = new Corrente(nomeC, bancoC, numeroContaC, saldoC, saldoEsp);

// Conta Poupança
let nomeP = prompt("Digite o nome do correntista (Poupança):");
let bancoP = prompt("Digite o banco:");
let numeroContaP = prompt("Digite o número da conta:");
let saldoP = parseFloat(prompt("Digite o saldo:"));
let jurosP = parseFloat(prompt("Digite o valor dos juros (%):"));
let vencimentoP = prompt("Digite a data de vencimento (dd/mm/aaaa):");

let contaPoupanca = new Poupanca(nomeP, bancoP, numeroContaP, saldoP, jurosP, vencimentoP);

console.log("\n=== Dados da Conta Corrente ===");
console.log("Nome:", contaCorrente.nomeCorrentista);
console.log("Banco:", contaCorrente.banco);
console.log("Número da Conta:", contaCorrente.numeroConta);
console.log("Saldo:", contaCorrente.saldo);
console.log("Saldo Especial:", contaCorrente.saldoEspecial);

console.log("\n=== Dados da Conta Poupança ===");
console.log("Nome:", contaPoupanca.nomeCorrentista);
console.log("Banco:", contaPoupanca.banco);
console.log("Número da Conta:", contaPoupanca.numeroConta);
console.log("Saldo:", contaPoupanca.saldo);
console.log("Juros (%):", contaPoupanca.juros);
console.log("Data de Vencimento:", contaPoupanca.dataVencimento);
