export default class Conta {

    constructor(saldo) {
        this.saldo = saldo;
    }

    sacar(saldo, valorSaque){
        this.saldo = saldo - valorSaque;

        alert("Saque efetuado com sucesso!" + "\nSaldo atual em conta: " + this.saldo);

        
    }

}