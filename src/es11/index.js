const button = document.getElementById("btn");

button.addEventListener("click", async function () {
    const module = await import("./file.js");
    module.hello();
})



// BigInt

const aBigNumber = 1576460752303423500n;
const anotherBigNumber = BigInt(1576460752303423500);

console.log(aBigNumber);
console.log(anotherBigNumber);


// Promise All Settled

const promise1 = new Promise((resolve, reject) => reject("reject"));
const promise2 = new Promise((resolve, reject) => resolve("resolve"));
const promise3 = new Promise((resolve, reject) => resolve("resolve 1"));

Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response))



// Global This
console.log(window);
console.log(globalThis);



// Null operator
const fooo = null ?? 'default string';
console.log(fooo);



// Optional Chaining
const user = {};
console.log(user?.profile?.email);

if(user?.profile?.email) {
    console.log('email')
} else{
    console.log('fail')
}
