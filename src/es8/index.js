// Object entries & .length

const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana',
}

const arreglo = Object.entries(data);

console.log(arreglo);
console.log(arreglo.length);


// Values

const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana'
}

const values = Object.values(data);
console.log(values);

// Padding
const string = 'hello';
console.log(string.padStart(7, 'hi'));
console.log(string.padEnd(12, ' XD'));



const helloWorld = () => {
    return new Promise((resolve, reject) => {
    (true)
    ? setTimeout(() => resolve('Hello World'), 3000)
    : reject(new Error('Test Error'))
    })
};


const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
};

helloAsync();

const anotherFunction = async() => {
    try {
        const hello = await helloWorld();
        console.log(hello)
    } catch (error) {
        console.log(error)
    }
}

anotherFunction();

