// .replaceAll

const string = "JavaScript es maravilloso, con JavaScript puedo contruir en futuro de la web";
const stringReplace = string.replace("JavaScript", "Python");

console.log(stringReplace);

const replacedString = string.replaceAll("JavaScript", "Python");
console.log(replacedString);


// Metodos privados

class Message {
    #show(val) {
        console.log(val)
    };
    get #add(val) {
    //    ...
    };
}

const message = new Message;
message.show("Hola!");



// Promise any
const promise1 = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) => resolve("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));

Promise.any([promise1, promise2, promise3])
    .then(response => console.log(response));


// WeakRef(elemento)
class anyClass {
    constructor(element) {
        this.ref = new WeakRef(element)
    }
    //{...}
}



// 🧪 Nuevos operadores lógicos
let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);

let isTrue = true;
let isFalse = false;
console.log(isTrue ||= isFalse);

let isTrue = true;
let isFalse = false;
console.log(isTrue ??= isFalse);



