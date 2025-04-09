let idade = prompt("Qual a sua idade?");

if (idade < 18) {
	alert("Esse jogo não é permitido para menores de 18 anos!");
}else {
  alert("Aproveite o Game!");
}

if (idade >= 18) {
  escolhaJogador = prompt("Digite 1-Pedra, 2-Papel ou 3-Tesoura.");
  escolhaPC = Math.floor(Math.random() * 3) + 1;

if (escolhaJogador == escolhaPC) {
  alert("Opa deu Empate!")
}
  //1º bloco
  if (escolhaJogador == 1) {
  if (escolhaPC == 2) {
    alert("Computador venceu, escolheu papel.");
  }
  if (escolhaPC == 3) {
    alert("Jogador vence, computador escolheu tesoura (:p)");
  }
}

  //2º bloco
if (escolhaJogador == 2) {
  if (escolhaPC == 1) {
    alert("Jogador venceu, computador escolheu pedrakkk");
  }
  if (escolhaPC == 3) {
    alert("Computador venceu, escolheu tesoura.");
  }
}

 //3º bloco
if (escolhaJogador == 3) {
  if (escolhaPC == 1) {
    alert("Computador venceu, escolheu pedra.");
  }
  if (escolhaPC == 2) {
    alert("Jogador venceu, computador escolheu papel");
    }
  }
}
