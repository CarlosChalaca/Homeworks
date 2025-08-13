//PARTE 1 - Funciones de los arrays

// length - Número de elementos en el array
let frutas = ["manzana", "pera", "uva"];
console.log(frutas.length); // 3

// at() - Elemento en una posición dada
let numeros = [10, 20, 30, 40];
console.log(numeros.at(-1)); // 40

// constructor - Referencia la función constructora del array
let n = [1, 2, 3];
console.log(n.constructor === Array); // true

const arr = [1, 2, 3, 4, 5];

// concat() – Une arrays
console.log("concat:", arr.concat([6, 7])); // [1,2,3,4,5,6,7]

// copyWithin() – Copia parte del array en otra posición
console.log("copyWithin:", arr.slice().copyWithin(0, 3, 5)); // copia [4,5] al inicio

// entries() – Iterador de [índice, valor]
console.log("entries:");
for (let [i, v] of arr.entries()) console.log(i, v);

// every() – Verifica si todos cumplen la condición
console.log("every > 0:", arr.every(v => v > 0)); // true

// fill() – Rellena con un valor
console.log("fill:", arr.slice().fill(9, 1, 3)); // [1,9,9,4,5]

// filter() – Filtra por condición
console.log("filter pares:", arr.filter(v => v % 2 === 0)); // [2,4]

// find() – Devuelve el primer elemento que cumple
console.log("find > 3:", arr.find(v => v > 3)); // 4

// findIndex() – Índice del primer elemento que cumple
console.log("findIndex > 3:", arr.findIndex(v => v > 3)); // 3

// findLast() – Último elemento que cumple
console.log("findLast par:", arr.findLast(v => v % 2 === 0)); // 4

// findLastIndex() – Índice del último elemento que cumple
console.log("findLastIndex par:", arr.findLastIndex(v => v % 2 === 0)); // 3

// flat() – Aplana arrays anidados
console.log("flat:", [1,[2,[3]]].flat(2)); // [1,2,3]

// flatMap() – Mapea y aplana un nivel
console.log("flatMap:", arr.flatMap(v => [v, v*2]));

// forEach() – Ejecuta una función por elemento
console.log("forEach:");
arr.forEach(v => console.log(v * 2));

// includes() – Verifica si contiene un valor
console.log("includes 3:", arr.includes(3)); // true

// indexOf() – Primer índice de un valor
console.log("indexOf 3:", arr.indexOf(3)); // 2

// join() – Une elementos en string
console.log("join:", arr.join('-')); // "1-2-3-4-5"

// keys() – Iterador de índices
console.log("keys:", [...arr.keys()]);

// lastIndexOf() – Última posición de un valor
console.log("lastIndexOf 3:", [1,3,3,2].lastIndexOf(3)); // 2

// map() – Crea un nuevo array transformado
console.log("map x2:", arr.map(v => v * 2));

// pop() – Elimina último y lo devuelve
let temp1 = arr.slice();
console.log("pop:", temp1.pop(), temp1);

// push() – Agrega al final
temp1 = arr.slice();
temp1.push(6);
console.log("push:", temp1);

// reduce() – Reduce a un solo valor
console.log("reduce suma:", arr.reduce((a, b) => a + b, 0)); // 15

// reduceRight() – Reduce de derecha a izquierda
console.log("reduceRight resta:", arr.reduceRight((a, b) => a - b)); 

// reverse() – Invierte el array
temp1 = arr.slice();
console.log("reverse:", temp1.reverse());

// shift() – Elimina primero y lo devuelve
temp1 = arr.slice();
console.log("shift:", temp1.shift(), temp1);

// slice() – Copia parte del array
console.log("slice:", arr.slice(1, 3)); // [2,3]

// some() – Alguno cumple la condición
console.log("some > 4:", arr.some(v => v > 4)); // true

// sort() – Ordena
temp1 = [3,1,4,2];
console.log("sort asc:", temp1.sort((a,b) => a-b));

// splice() – Quita y/o añade
temp1 = arr.slice();
temp1.splice(2, 1, 99);
console.log("splice:", temp1);

// toLocaleString() – Convierte a string según localización
console.log("toLocaleString:", arr.toLocaleString());

// toString() – Convierte a string
console.log("toString:", arr.toString());

// unshift() – Agrega al inicio
temp1 = arr.slice();
temp1.unshift(0);
console.log("unshift:", temp1);

// values() – Iterador de valores
console.log("values:", [...arr.values()]);

// PARTE 2 - Regular function vs Arrow function

// Regular function para verificar si un número es par o impar
function checkEvenOddRegular(num) {
    if (num % 2 === 0) {
        console.log(`${num} es par`);
    } else {
        console.log(`${num} es impar`);
    }
}

checkEvenOddRegular(4); // 4 es par
checkEvenOddRegular(7); // 7 es impar

// Arrow function para verificar si un número es par o impar
const checkEvenOddArrow = (num) => {
    if (num % 2 === 0) {
        console.log(`${num} es par`);
    } else {
        console.log(`${num} es impar`);
    }
};

checkEvenOddArrow(10); // 10 es par
checkEvenOddArrow(3);  // 3 es impar
