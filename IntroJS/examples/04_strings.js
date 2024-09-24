console.log('04');

let username = 'Ramiro     ';
let password = '  1234';
let authenticated = false;

username = username.trim();
password = password.trim();

username = username.toLowerCase();

if (username === 'Ramiro' && password === '1234') {
    authenticated = true;
}

console.log(`Is authenticated ${authenticated}`); // Is authenticated true

const email = prompt('Add email');
const email2 = 'Test@Keepcoding.es'

if (email === null) {
    throw new Error('Null is not valid');
}
console.log(email2.toLowerCase().trim().includes('@test.com')); // false

console.log(email.toLowerCase().trim().includes('@test.com')); // true
console.log(email.toLowerCase().trim().replaceAll('test', '***')); // ***@***.com
console.log(email.toLowerCase().trim().replace('test', '***')); // ***@test.com


if (!email.toLocaleLowerCase().trim().includes('@keepcoding')) {
    // Lanzar un error
    throw new Error('No es correo de keepcoding.');
}

const promptPrice = '23'
console.log(parseInt(promptPrice));
console.log(+promptPrice);
console.log(Number(promptPrice));
