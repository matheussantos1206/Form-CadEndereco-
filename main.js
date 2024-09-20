'use strict';  //Ativa o modo restrito //Este modo faz com que o javascripti opere de formas mais segura e rigorosa, ajudando a evitar erros comuns  de programação 
/* consumo de API - https://viacep.com.br/ */ 

//função para ;limpar campos preenchidos

const limparFormulario = () => {
    document.getElementById('logradoro').valeu = '';
    document.getElementById('localidade').valeu = '';
    document.getElementById('bairro').valeu = '';
    document.getElementById('uf').valeu = '';
    document.getElementById('complemento').valeu = '';
    document.getElementById('numero').valeu = '';
    document.getElementById('cep').valeu = '';
}