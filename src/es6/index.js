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


