/*

OBJETIVO - quando clicarmos no botão temos que mostar a imagem de fundo correspondente.

-passo 1 - dar um jeito de pegar o elemento HTML dos botoes 

-passo 2 - dar um jeito de indentifocar o clique do ususario no botão

-passo 3 - demaracar o botão selecionado anterior

-passo 4 - marcar o botão clicando como se estivesse selecionada 

-passo 5 - esconder a imagem de fundo anterior 

-passo 6 - fazer aparecer a imagem de fundo correspondente ao botao clicado

*/

// passo 1
const botoesCarrosel = document.querySelectorAll('.botao');
const listaImagens = document.querySelectorAll('.imagem');

// passo 2
botoesCarrosel.forEach((botao,indice) => {
    botao.addEventListener('click', () => {
        //passo 3
        const botaoSelecionado = document.querySelector('.selecionado');
        (botaoSelecionado.classList.remove('selecionado'));

        //passo 4
        botao.classList.add('selecionado');

        //passo 5
        const imagemAtiva = document.querySelector(".ativa");
        imagemAtiva.classList.remove('ativa');

        //passo 6
        listaImagens[indice].classList.add('ativa');

        })
})