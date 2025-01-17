let listaNumerosSorteados = [];
let limiteNumeros = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, 'Brazilian Portuguese Female',{rate:1.2})
}

function exibirMensagemInicial(){
  exibirTextoNaTela("h1", "Jogo Nùmero Secreto");
  exibirTextoNaTela("p","Escolha um numero entre 1 e 10");
}

function verificarChute() {
  let chute = document.querySelector("input").value;

  if (chute == numeroSecreto) {
    exibirTextoNaTela("h1", "Acertou");
    let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
    let mensagemTentativas = `Você descobriu o numero secreto com ${tentativas} ${palavraTentativa}`;

    exibirTextoNaTela("p", mensagemTentativas);

    document.getElementById('reiniciar').removeAttribute('disabled');
  } else {
    if (chute > numeroSecreto) {
      exibirTextoNaTela("p", "O numero secreto e menor");
    } else {
      exibirTextoNaTela("p", "O numero secreto e maior");
    }

    tentativas++;
    limparCampo();
  }
}
reiniciarJogo();
function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * limiteNumeros + 1);
  let qtdElementosLista = listaNumerosSorteados.length;

  if(qtdElementosLista == limiteNumeros){
    listaNumerosSorteados = [];
  }

  if(listaNumerosSorteados.includes(numeroEscolhido)){
    return gerarNumeroAleatorio();
  }else{
    listaNumerosSorteados.push(numeroEscolhido);
    return numeroEscolhido;
  }
}

function limparCampo(){
  chute = document.querySelector('input');
  chute.value = '';
}

function reiniciarJogo(){
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  exibirMensagemInicial();
  document.getElementById('reiniciar').setAttribute('disabled',true);
}
