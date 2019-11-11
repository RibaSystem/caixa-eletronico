export default class Conta {

    constructor(saldo) {
        this.saldo = saldo;
    }

    sacar(valorSaque, saldo){
        if(valorSaque>saldo){
            alert("Saldo insuficiente para saque!");
        }else{
            saldo = saldo - valorSaque;
        }
    }
}