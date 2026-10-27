// VARIÁVEIS - São identificadores que nos permitem acessar um valor armazenado durante a execução de um programa.

// Pense em uma caixa etiquetada.
// A etiqueta é o nome da variável.
// O conteúdo é o valor que ela representa.

// O JavaScript possui três formas de declarar variáveis.
// Declaração nodeDaVariável = valor da variável

// 1 - const
// Utilizamos essa declaração de const, quando não pretendemos atribuir outro valor a nossa variável depois de inicializar.
const nome = "Adrielli"
console.log(nome)

// 2 - let
// Utilizamos essa declaração quando o valor da variável precisar ser alterado ao longo do programa.
let pais = "Brasil"
console.log(pais)

// Reatribuindo um valor a variável
pais = "Portugal"
console.log(pais)

pais = "Marrocos"
console.log(pais)

// 3 - var (NÃO RECOMENDADO)
// É a forma antiga de declaração; Ainda funciona, mas geralmente deve ser EVITADA em códigos modernos.

var cidade = "São Paulo"
var idade = 24

// Regras para nomear variáveis
// Nomes válidos
let sobrenome;
let idadeUsuario;
let _total;
let $preco;
let quantidade1;


// Nomes inválidos
// let 2nome; /* Começar com números */ 
// let nome usuario; /* Possuir espaços */
// let let; /* Utilizar palavras reservadas da linguagem */
// let banana-doce; /* Utilizar hífens ( - ) */