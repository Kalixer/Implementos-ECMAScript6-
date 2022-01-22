const obj = {
    name: 'Alejandro',
    age: '21',
    country: 'Chile',
}

let { name, ...all } = obj;
console.log(name, all);


const obj = {
    name: 'Alejandro',
    age: 21,
}

const obj1 = {
    ...obj,
    country: 'Chile'
}
console.log(obj1);


const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Hello World'), 3000)
            : reject(new Error('Test Error'))
    });
};


helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizo'))


const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2018-04-28');
const year = match[1];
const month = match[2];
const day = match[3];

console.log('Date -> ', year, month, day);