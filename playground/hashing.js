const {SHA256} = require('crypto-js');

const message = 'I am user number 3';
const hash = SHA256(message).toString();

console.log(`message: ${message}`);
console.log(`hash: ${hash}`);