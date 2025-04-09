alert("Seja bem-vende, vamos jogar?");
let rodada = 1;

while (rodada <= 3) {
console.log("Rodada: " + rodada);

let escolhaJogador = prompt("Nivel " + rodada + ", escolha o vidro (1, 2 ou 3)?");

if (escolhaJogador < 1 || escolhaJogador > 3) {
    alert("Escolha inválida! Você deve escolher entre 1, 2 ou 3.");
    continue;
}

let pisoQuebrado = Math.floor(Math.random() * 3) + 1;

if (escolhaJogador == pisoQuebrado) {
    alert("iiih ala, caiukkkk, jogo finalizado!");
    rodada = 1000;;
} else {
    alert("Boaa, você passou, o piso " + pisoQuebrado + " está estranho viu!");
}
    rodada = rodada + 1;
}

if (rodada == 4) {
    alert("Aeee venceu po, Congrats!");
}