'use strict';  //Ativa o modo restrito //Este modo faz com que o javascripti opere de formas mais segura e rigorosa, ajudando a evitar erros comuns  de programação 
/* consumo de API - https://viacep.com.br/ */

//função para limpar campos preenchidos

const limparFormulario = () => {
    document.getElementById('logradouro').value = '';
    document.getElementById('localidade').valeu = '';
    document.getElementById('bairro').valeu = '';
    document.getElementById('uf').valeu = '';
    document.getElementById('complemento').valeu = '';
    document.getElementById('numero').valeu = '';
    document.getElementById('cep').valeu = '';
}

//Verifica se o cep é válido 
const eNumero = (numero) => /^[0-9]+$/.test(numero);// testa a espreção no argumento
const cepValido = (cep) => cep.length == 8 && eNumero(cep)// indentifica o tanto de numero indentificado no cep 

//função preenchrer formulário

const preencherformulario = (endereco) => { // Função que preenche os campos abaixo de acordo com os dados da API
    document.getElementById('logradouro').value = endereco.logradouro;
    document.getElementById('localidade').value = endereco.localidade;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('uf').value = endereco.uf;
}

// Função para consumo de API ViaCEP
const pesquisarCep = async () => {//principal função que será executada quando for preencher o formúlario
    limparFormulario();//função para deixar o formúlario em branco para ser preenchido
    const url = `http://viacep.com.br/ws/${cep.value}/json/`;

    if (cepValido(cep.value)) {
        const dados = await fetch(url);//fetch requisição do viacep e await garante que o feitch responda corretamente no formúlario
        const addres = await dados.json();//garante que o formato seja json

        if (addres.hasOwnProperty('erro')) {
            alert('CEP não encontrado');
        } else {
            preencherformulario(addres);
        }

    } else {
        alert('CEP Incorreto');
    }
}

// Chama escutador  para disparar ação de preenchimento 
document.getElementById('cep').addEventListener('focusout', pesquisarCep);