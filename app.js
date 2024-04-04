#! usr/bin/env node
// Generates a random integer between 1 and 10
function getRandomInt() {
    return Math.floor(Math.random() * 20) + 1;
}
console.log(getRandomInt());
export {};
