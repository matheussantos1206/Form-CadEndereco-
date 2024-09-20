'use strict';  //Ativa o modo restrito //Este modo faz com que o javascripti opere de formas mais segura e rigorosa, ajudando a evitar erros comuns  de programação 
/* consumo de API - https://viacep.com.br/ */ 

//função para limpar campos preenchidos

const limparFormulario = () => {
    document.getElementById('logradoro').valeu = '';
    document.getElementById('localidade').valeu = '';
    document.getElementById('bairro').valeu = '';
    document.getElementById('uf').valeu = '';
    document.getElementById('complemento').valeu = '';
    document.getElementById('numero').valeu = '';
    document.getElementById('cep').valeu = '';
}

//Verifica se o cep é válido 
const eNumero = (numero) => /^[0-9]+$/.test(numero);// testa a espreção no argumento
const cepValido =(cep) => cep.length == 8 && eNumero(cep)// indentifica o tanto de numero indentificado no cep 

//função preenchrer formulário

const preencherformulario = (endereco) =>{
    document.getElementById('logradoro').value = endereco.logradoro;
    document.getElementById('localidade').value = endereco.localidade;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('uf').value = endereco.uf;
}