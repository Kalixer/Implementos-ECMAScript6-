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

console.log(team1, team2, education);