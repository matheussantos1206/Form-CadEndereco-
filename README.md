# ``🧷projeto de cadastro de endereço com consumo de API (VIaCep)``

## ``instrodução``
Este projeto tem como objetivo consumir a API do ViaCEP para preencher automaticamente um formulário com dados de endereço com base no CEP informado. Note que é utilizado o modo restrito, no início do código, com o uso do [use strict;](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Strict_mode)

![ Img !](/img/fun%C3%A7%C3%B5es.png)

## ``💾funções feitas e suas funcionalidase ``



### 📱Funcionalidades

- **Limpar Formulário:** Ao iniciar, o formulário é limpo para evitar dados anteriores.
- **Validação de CEP:** Verifica se o CEP informado possui 8 dígitos numéricos.
- **Preencher Formulário:** Ao receber os dados da API, o formulário é preenchido automaticamente com as informações de endereço.

### 📒Instruções de Uso

1. **Instalação:** Certifique-se de que você tem um servidor web para testar o código, já que ele utiliza a API.
2. **Uso:** Digite um CEP válido no campo correspondente e acione a função que realiza a consulta na API. Os campos do formulário serão preenchidos automaticamente com as informações obtidas.

![img !](/img/outra%20parte%20do%20c%C3%B3digo.png)

## Verificação e Pesquisa de CEP

Este módulo contém uma função para validar e pesquisar CEPs (Código de Endereçamento Postal) utilizando a API do ViaCEP. 

### Funções Principais:

- `eNumero(numero)`: Verifica se a entrada é composta apenas por números.
- `cepValido(cep)`: Confirma se o CEP tem exatamente 8 dígitos e é numérico.
- `pesquisarCep()`: 
  1. Limpa o formulário.
  2. Cria a URL da API com base no CEP informado.
  3. Verifica se o CEP é válido; se não for, exibe um alerta.
  4. Se o CEP for válido, busca os dados na API e verifica se houve erro. Se não houver, preenche o formulário com os dados do endereço.

### 📱Uso

Chame a função `pesquisarCep()` ao submeter um formulário para realizar a validação e buscar o endereço correspondente ao CEP informado.

### `` 💽eNumero(numero)``
Objetivo: Verifica se a string numero contém apenas dígitos.
Elementos:
 * **Expressão Regular**: /^[0-9]+$/ — Garante que a string comece e termine com números (ou seja, não contém caracteres não numéricos).
* **Método test()**: Retorna true se a string corresponder à expressão, caso contrário, retorna false.

### ``💽cepValido(cep)``
Objetivo: Valida se o CEP tem o formato correto.
Elementos:
* **Parâmetro cep**: A string do CEP a ser validada.
* **Condições**: cep.length == 8: Garante que o CEP tem exatamente 8 dígitos.
eNumero(cep): Verifica se todos os caracteres do CEP são numéricos.

### `` 💽pesquisarCep()``
Objetivo: Busca dados de um CEP utilizando a API do ViaCEP e preenche um formulário com as informações retornadas.
Elementos:
* **Função Assíncrona**: Permite o uso de await para lidar com promessas.
* **limparFormulario()**: Limpa os campos do formulário antes de iniciar a busca.
* **Construção da URL**: const url = https://viacep.com.br/`;` — Cria a URL para a API utilizando o valor do CEP.
* **fetch(url)**: Realiza a requisição à API e aguarda a resposta.
* **dados.json()**: Converte a resposta da API em um objeto JSON.
* **Verificação de Erro**: Usa addres.hasOwnProperty('erro') para verificar se a resposta contém um erro (indicando que o CEP não foi encontrado).
O método [hasOwnProperty()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) retorna um booleano indicando se o objeto possui a propriedade especificada como uma propriedade definida no próprio objeto em questão (ao contrário de uma propriedade herdada).
* **Alertas**: Exibe mensagens ao usuário em caso de erro ou CEP inválido.
preencherForumulario(addres): Chama uma função (não mostrada) para preencher o formulário com os dados obtidos.
 
### ``💽funções principais`` 
 * [**async**](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Asynchronous/Introducing) :A programação assíncrona é uma técnica que permite que seu programa inicie uma tarefa potencialmente de longa duração e ainda seja capaz de responder a outros eventos enquanto essa tarefa é executada, em vez de ter que esperar até que essa tarefa seja concluída. Uma vez que essa tarefa tenha terminado, seu programa é apresentado com o resultado.

 * [**await**](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/await) :A expressão await faz a execução de uma função async pausar, para esperar pelo retorno da Promise, e resume a execução da função async quando o valor da Promise é resolvido. Ele então retorna o valor final da Promise. Se esse valor não for uma Promise, ele é convertido para uma Promise resolvida.

 ![resultado](/img/capa-do-projeto-usando-API.gif)

 ## referencias:
 * [viacep](https://viacep.com.br/)
 * [Mdn web docs](https://developer.mozilla.org/pt-BR/)
  