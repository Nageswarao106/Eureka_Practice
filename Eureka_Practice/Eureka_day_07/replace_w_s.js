let str = 'helloworld@!#$%^&';
let words = str.replace(/[^a-zA-Z]/g, '');
let specials = str.replace(/[a-zA-Z]/g, '');
result = words + specials
console.log(result);
