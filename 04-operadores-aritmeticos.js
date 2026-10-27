// Os operadores aritméticos são usados para realizar operações matemáticas, como somar, subtrair, multiplicar e dividir valores.

const preco = 50;
const frete = 15;

// 1 Adição (+)
// Serve para somar valores
console.log(preco + frete);

console.log("-------");

// 2 - Subtração (-)
// Serve para subtrair um valor do outro.
console.log(preco - frete);
console.log(preco - (-frete));

console.log("-------")

// 3 Multiplicação (*)
// Serve para multiplicar valores.
console.log(preco * frete);
console.log(preco * (-frete));

// 4 - Divisão ( / )
// Serve para dividir um valor por outro.
console.log(preco / frete);
console.log(preco / (-frete));
console.log((-preco) / frete);

console.log(0 / 10);
console.log(10 / 0);

// 5 - Resto da divisão ( % )
// O operador de resto retorna a sobra da divisão.

// Número ímpar, pois o resto é diferente de 0
console.log(10 % 3);
// Número ímpar, pois o resto é diferente de 0
console.log(11 % 3);
// Número par, pois o resto é zero
console.log(12 % 3);


// 6 - Operador Exponênciação ( ** )
// Eleva um número a uma potência, ou seja, é uma forma simplificada de falar que um número é muiltiplicado por si mesmo X vezes.

console.log(preco ** frete);
console.log(2*2*2*2*2*2*2);

// 7 - Operador de incremento ( ++ )
// Esse operador serve para aumentar em uma unidade o valor de uma variável (+1).

let x = 1;
console.log(x);

x++;
console.log(x);

x++;
console.log(x);

// 8 - Operador de decremento ( -- )
// Esse operador serve para diminuir em uma unidade o valor de uma variável (-1).
console.log(x--);
console.log(x--);
console.log(x--);
console.log(x--);
console.log(x--);
console.log(x--);
console.log(x--);