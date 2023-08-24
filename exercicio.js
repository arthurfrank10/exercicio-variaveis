/*
* Arthur
*
*/

/*interpretaçao:
*1. resposta:
*no primeiro "console.log" sera impresso o valor de b, "10", depois o valor foi alterado para 5. logo, no segundo sera impresso o valor de "a,b", 10,5.
*
*2. resposta:
*diz que o valor de c é igual o de a, o valor de b = c, e o valor de a = b, logo voltara "10,10,10"
*
*3. resposta:
*nomes -cargaHoraria, -valorDia.
*esse comando coloca o valor das variaveis conforme as respostas do usuario, e retorna o calculo de quanta o mesmo ganha por hora.
*
//escrita de codigo:
//1. resposta:
*/
let nome;
let idade;
console.log(typeof nome,typeof idade);
//esse tipo foi impresso pois eu nao estipulei um valor a variavel
nome = prompt("qual o seu nome?");
idade = prompt("qual a sua idade?");
console.log(typeof nome,typeof idade);

console.log("ola", nome, "voce tem", idade, "anos");

//as variaveis receberam as respostas do comando prompt, e seus tipos ficaram como string e numero

//2. resposta:

let simOuNao1;
let simOuNao2;
let simOuNao3;

simOuNao1 = prompt("voce esta solteiro?");
simOuNao2 = prompt("voce bebe?");
simOuNao3 = prompt("voce fuma?");
console.log(typeof simOuNao1,typeof simOuNao2,typeof simOuNao3);
console.log("voce esta solteiro?", simOuNao1, "voce bebe?", simOuNao2, "voce fuma?", simOuNao3);

//3. resposta:

let a = 10;
let b = 25;
//precisamos criar uma variavel para guardar o valor de "a"
let c = 10;
 a = b;
 b = c;
console.log("o novo valor de a é", a, "o novo valor de b é", b);
//prontinho gabriel:)
