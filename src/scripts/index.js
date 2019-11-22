import Caixa from './Caixa';
import Conta from './Conta';
import '../styles/index.scss';

const caixa = new Caixa();
const conta = new Conta();

/**
 * Quando a paginar carregar...
 */
document.addEventListener("DOMContentLoaded", () => {
  //pegar formulario de valores do DOM
  const formValores = document.getElementById("valores-form");
  //pegar formulario de saque do DOM
  const formSaque = document.getElementById("saque-form");
  //adicionar evento ao submeter o formulario de valores
  formValores.addEventListener('submit', onValoresSubmit);
  //adicionar evento ao submeter o formulario de saque
  formSaque.addEventListener('submit', onSaqueFormSubmit);

});

//função que recupera os valores digitados e chama o metodo calcularNotas da classe Caixa
const onValoresSubmit = (e) => {
  e.preventDefault();
  const formValores = e.target;
  const valorConta = formValores.valorConta.value;

  if (valorConta == 0 || valorConta == null) {
    alert("Digite a seu saldo!");
    return;
  } else {
    caixa.notas100 = formValores.notas100.value;
    caixa.notas50 = formValores.notas50.value;
    caixa.notas20 = formValores.notas50.value;
    caixa.notas10 = formValores.notas10.value;
    conta.saldo = valorConta;
    const form = document.getElementById("valores-form");
    form.classList.add('hidden');
    const formSaque = document.getElementById("saque-form");
    formSaque.classList.remove('hidden');
  }
};

const calcularNotasEmCaixa = (notas100, notas50, notas20, notas10) => {

  const n100 = notas100 * 100;
  const n50 = notas50 * 50;
  const n20 = notas20 * 20;
  const n10 = notas10 * 10;
  return n100 + n50 + n20 + n10;
};

const onSaqueFormSubmit = (e) => {
  e.preventDefault();
  const formSaque = e.target;
  const valorSaque = formSaque.valorSaque.value;
  const qtd = calcularNotasEmCaixa(caixa.notas100, caixa.notas50, caixa.notas20, caixa.notas10);

  if (valorSaque % 10 != 0) {
    alert("Valor Indisponivel!");
  } else if ((valorSaque) > (qtd) || ((conta.saldo) > (qtd) && (valorSaque) > (qtd))) {
    alert("Valor de saque maior que quantidade em caixa!");
  } else if (conta.saldo < valorSaque) {
    alert("Saldo insuficiente!");
  } else {
    conta.sacar(conta.saldo, valorSaque);
    caixa.calcularNotas(valorSaque, caixa.notas100, caixa.notas50, caixa.notas20, caixa.notas10);
  }

};

    // valorConta = document.getElementById("valorConta").style.display = 'none';

  // divValor = document.getElementById("divValorSaque").style.display = 'block';