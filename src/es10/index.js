// metodo .flat()
let array = [1,2,3, [1,2,3, [1,2,3]]];

console.log(array.flat(2));


// Metodo .flatMap()
let array2 = [1,2,3,4,5];

console.log(array2.flatMap(value => [value, value * 2]));


// Metodo trimStart
let hello = '            hello world';
console.log(hello);
console.log(hello.trimStart());


// try/catch
try {

} catch { // antes habia que poner (error)
    error
}


// Object.fromEntries
let entries = [["name", "Alejandro"], ["age", "21"]];
console.log(Object.fromEntries(entries));


// Symbol.prototype.description
let mySymbol = `My Symbol`;
let symbol = Symbol(mySymbol);
console.log(symbol.description);


