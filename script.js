alert("Seja bem vindo Dev")

// DECLARACOES E VARIAVEIS
// VAR, LET E CONST

var nome="Fiap";
console.log(nome);
var nome="Dev";
console.log(nome);

if(true){
    var avatar="Fiapudo"
}

// se fosse let nao deixaria acessar os dados de fora
console.log(avatar);

let exemplo1="Ola Dev-Jet";
console.log(exemplo1);

const exemplo2="Ola Dev-Const"
console.log(exemplo2);

let exemplo3="20"
console.log(exemplo3);

let exemplo4=true;
console.log(typeof exemplo4);

let exemplo5={nome: "fiap"}
console.log(exemplo5);

// array
let exemplo6= ["fiapudos on fire"]
console.log(exemplo6);

// indefinido
let exemplo7;
console.log(exemplo7);

// valor null
let exemplo8=null;
console.log(exemplo8);

// OPERADORES ARITMETICOS

const valor1=10;
const valor2=20;

console.log(valor1 + valor2)
console.log(valor1 - valor2)
console.log(valor1 / valor2)
console.log(valor1 * valor2)

// OPERADORES LÓGICOS

const valor3=40;
const valor4=20;

console.log(valor3 > valor4)
console.log(valor3 < valor4)
console.log(valor3 > valor4 && valor4 < 0)
console.log(valor3 == valor4 || valor4 >10)

// OPERADORES DE COMPARAÇÃO

console.log(valor3 == valor4)//compara
console.log(valor3 === valor4)//compara e verifica o tipo

/*
Utilizando as variáveis p (preço de produto) e v (valor do desconto),
cria uma nova variável chamada preço final que subtraia o desconto
do preço e exiba o resultado.
*/

const p=20;
const v=10;
const precoFinal =p-v;
console.log("O desconto é de:", precoFinal, "reais");

//estrutura condicional

//if
if(true){
    console.log("verdadeiro")
}

let nome1="fiap";

if(nome1 =="fiap"){
    console.log("nome Correto")
}
//if/else

if(nome1 =="fiap"){
    console.log("nome Correto")
}else{
    console.log("nome Errado")
}

//if,if else, else encadeado/aninhado

let idade =13;

if(idade <= 13){
    console.log("uma criança")
}else if(idade >13 && idade <18){
    console.log("um adolescente")
}else{
    console.log("um adulto")
}

//swicth case

let times ="corinthians"

switch(times){
    case "corinthinas":
        console.log("Um time de tradição")
        break;
    case "sao paulo":
        console.log("sem tradição")
        break;
    case "palmeiras":
        console.log("sem mundial")
        break;
    default:
        console.log("nenhumas das opções(santos")

// condicao ternaria

let numero= 100;
let resultado = numero= 100? "Certo":"Errado";
console.log(resultado);

let usuario="fiap"
let usuariologado= usuario=="fiap"? "logado com sucesso":"usuario inválido"
console.log(usuariologado)

//et