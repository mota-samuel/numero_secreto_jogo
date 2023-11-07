// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do numero secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML= 'Escolha um numero entre 1 e 10';

let listaDeNumeroSorteado = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativa = 1;

function exibirTextoNaTela(tag, texto){
let campo = document.querySelector(tag);
campo.innerHTML = texto;
responsiveVoice.speak(texto, 'Brazilian Portuguese Female');
}

function exibirMensagemInicial(){
exibirTextoNaTela('h1', 'Jogo do Numero Secreto');
exibirTextoNaTela('p',`Escolha um numero entre 1 e ${numeroLimite}`);
}

exibirMensagemInicial();

function verificarChute()
{
    let chute = document.querySelector('input').value;
    
    if(chute == numeroSecreto)
        	{
                exibirTextoNaTela('h1', 'Acertou!');
                let palavraTentativa= tentativa>1 ?'tentativas':'tentativa'
                let mensagemTentativa=`Voce descobriu o numero secreto com ${tentativa} ${palavraTentativa}!`;
                exibirTextoNaTela('p', mensagemTentativa);
                document.getElementById('reiniciar').removeAttribute('disabled');
            }
    else {if(chute > numeroSecreto)
        {
            exibirTextoNaTela('p','O numero secreto e menor');
        } else {
            exibirTextoNaTela('p', 'O numero secreto e maior');
        }
        tentativa++;
        limparCampo();
    }
}

function gerarNumeroAleatorio()
{
    let numeroEscolhido = parseInt(Math.random()* numeroLimite + 1);
    let quantidadeDeElementos = listaDeNumeroSorteado.length;
    if(quantidadeDeElementos == numeroLimite)
        {
            listaDeNumeroSorteado = [];
        }


    if(listaDeNumeroSorteado.includes(numeroEscolhido))
        {
            return gerarNumeroAleatorio;
        }else {
            listaDeNumeroSorteado.push(numeroEscolhido);
            console.log(listaDeNumeroSorteado);
            return numeroEscolhido;

        }
}

function limparCampo()
{
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo()
{
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativa = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}
