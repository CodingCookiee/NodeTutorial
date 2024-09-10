// import { generateRandomNumber, celciustoFarenheit } from './utilit.js';
// console.log(`Random Number: ${generateRandomNumber()}`);

// console.log(`Celcius to Farenhiet: ${celciustoFarenheit(0)}`);

import getPosts from './postController.js';
console.log(getPosts());

document.getElementById('app').innerHTML = `<h1>Hello World</h1>`;
document.getElementById('app').style.display = 'flex';
document.getElementById('app').style.justifyContent = 'center';
document.getElementById('app').style.alignItems = 'center';
document.getElementById('app').style.height = '100vh';
