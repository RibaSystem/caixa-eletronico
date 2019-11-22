export default class Caixa {

  constructor(notas100, notas50, notas20, notas10) {
    this.notas100 = notas100;
    this.notas50 = notas50;
    this.notas20 = notas20;
    this.notas10 = notas10;
  }
  calcularNotas(valor, notas100, notas50, notas20, notas10) {
    var qtd100 = 0, qtd50 = 0, qtd20 = 0, qtd10 = 0;
    var valorIsValid = valor;
    do
      if (valorIsValid > 10) {
        valorIsValid = valorIsValid - 20;
      }
    while (valorIsValid > 10);
    if (valorIsValid == 10 && notas10 == 0) {
      alert("Valor indisponivel!");
    } else {

      for (var i = 0; i < notas100; i++) {
        if (valor >= 100) {
          var valor = valor - 100;
          this.notas100--;
          qtd100++;
        }
      }
      for (var i = 0; i < notas50; i++) {
        if (valor >= 50) {
          var valor = valor - 50;
          this.notas50--;
          qtd50++;
        }
      }
      for (var i = 0; i < notas20; i++) {
        if (valor >= 20) {
          var valor = valor - 20;
          this.notas20--;
          qtd20++;
        }
      }
      for (var i = 0; i < notas10; i++) {
        if (valor >= 10) {
          var valor = valor - 10;
          this.notas10--;
          qtd10++;
        }
      }
      alert("Notas de 100: " + qtd100 + "\nNotas de 50: " + qtd50 + "\nNotas de 20: " + qtd20 + "\nNotas de 10: " + qtd10);
    }
  }
}