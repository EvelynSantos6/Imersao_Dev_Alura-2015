//lista de jogadores
let personagem = ["", "", ""];

let viloes = ["", "", ""];

let forcaPersonagem = 0;
let forcaViloes = 0;

alert("O Array Personagem contem: " + personagem)

for(let i=0; i<3; i++) {
  escolhaPersonagem = prompt("Digite o nome do seu personagem: " + (i +1));
  personagem[i] = escolhaPersonagem;
  
	forcaPersonagem = forcaPersonagem + Math.floor(Math.random() * 10) + 1;
  forcaPersonagem += Math.floor(Math.random() * 10) + 1
}
console.log("Agora, o Array Personagem contém: " + personagem);

console.log("Inicio Vilões: " + viloes);

for(let i=0; i<3; i++) {
let indiceAleatorio = Math.floor(Math.random() * 5)
  viloesPossiveis = ["Evelynn", "Ambessa", "Camille", "Elise", "Lissandra"];
  viloes[i] = viloesPossiveis[indiceAleatorio];
  
  forcaViloes = forcaViloes + Math.floor(Math.random() * 10) + 1;
}
console.log("Final Vilões: " + viloes);


if(forcaPersonagem > forcaViloes) {
  alert("Seu time é muito forte! Você ganhou a disputa em Runeterra! Sua força foi: " + forcaPersonagem);
}else{
  if(forcaPersonagem < forcaViloes) {
    alert("Seu time eh péssimo, melhore! Os vilões venceram com força de: " + forcaViloes);
}else{
  alert("Os dois times tem a mesma força aff, empataram!");
  }
}