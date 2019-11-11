import Caixa from './Caixa';
import '../styles/index.scss';

/**
 * Quando a paginar carregar...
 */
document.addEventListener("DOMContentLoaded", () => {
    //pegar formulario do DOM
    const form = document.getElementById("caixa-form");
    
    //adicionar evento ao submeter o formulario
    form.addEventListener('submit', onSaqueFormSubmit);
  });
  //função que recupera os valores digitados e chama o metodo calcularNotas da classe Caixa
  const onSaqueFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const valorSaque = form.valorSaque.value;
    const notas100 = form.notas100.value;
    const notas50 = form.notas50.value;
    const notas20 = form.notas20.value;
    const notas10 = form.notas10.value;

    const caixa = new Caixa();
    if (valorSaque % 10 != 0) {
      alert("Valor Indisponivel!");
    } else if ((valorSaque) > ((notas100 * 100) + (notas50 * 50) + (notas20 * 20) + (notas10 * 10))) {
      alert("Valor de saque maior que quantidade em caixa!");
    } else {
    caixa.calcularNotas(valorSaque,notas100, notas50, notas20, notas10);
       
   }
  };

  // divValor = document.getElementById("divValorSaque").style.display = 'block';