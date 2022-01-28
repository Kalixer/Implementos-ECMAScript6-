// Default Params

// es5
function newFunction(name, age, country) {
    var name = name || 'Alejandro';
    var age = age || '21';
    var country = country || 'Chile';
    console.log(name, age, country);
}

// es6

function newFunction2(name = 'Al', age = '21', country= "CL"){
    console.log(name, age, country)
};

newFunction2();
newFunction2("Felipe", '25', "World");


// Templates y concatenacción

let hello = "Hello";
let world = "World";

let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

// es6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);


// es5
let lorem = "Esta es solo una frase ejemplo de conctenación \n"
+ "Y la frase es épica porque tiene esta continuación"
console.log(lorem);

// es6
let lorem2 = `Esta frase es más épica
porque es más fácil concatenerla
`;
console.log(lorem2);


// Desestructuración

let person = {
    'name': 'Alejandro',
    'age': 21,
    'country': 'Cl'
}

console.log(person.name, person.age);

let {name, age} = person;
console.log(name, age);


// Spread Operator

let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yesica', 'Camila'];

let education = ['David', ...team1, ...team2];

console.log(education);


let name = 'Alejandro'
let age = 21;
// es5
obj = { name: name, age: age}
// es6 
obj2 = {name, age}
console.log(obj);
console.log(obj2);


let names = [
    {name: 'Alejandro', age: 21},
    {name: 'Yesica', age: 20}
];

let listOfNames = names.map(
    function (item) {
        console.log(item.name);
    }
);

let listOfNames2 = names.map(item => console.log(item.name));


const listOfNames3 = (name, age, country) => {
    // ...
}

const listOfNames4 = name => {
    // ...
}

const square = num => num * num;


const helloPromise = () => {
    return new Promise((resolve, reject) => {
    if (true){
        resolve('Hey!');
    } else {
        reject('Ups!!')
    }

    })
}

helloPromise()
    .then(response => console.log(response))
    .then(() => console.log('Hola'))
    .catch(error => console.log(error))


class calculator{
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2, 2))

// es6
import { hello6 } from './module';
hello6();

// es5
const hello = require('./module.js');
console.log(hello());







