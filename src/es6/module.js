// es6
// const hello = () => {
//     return 'Hello'
// }
//
// export default hello;


// es5
function hello() {
    return 'Hello'
}

module.exports = hello;


// Generators

function* helloWorld() {
    if(true){
        yield 'Hello, ';
    }
    if(true){
        yield 'World';
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);