let str = 'helloworld@!#$%^&';
let result = str.replace(/[^a-zA-Z]/g, '');
console.log(result);