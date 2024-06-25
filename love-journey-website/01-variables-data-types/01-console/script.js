
console.log(100);

console.log('Hello World');

console.log(20, 'Hello', true);

const x = 100;

console.log(x);

console.error('Alert');

console.warn('Warning');

console.table({name: 'Brad', email: 'brad@gmail.com'})

console.group('simple');
console.log(x);
console.error('Alert');
console.warn('Warning');
console.groupEnd('end');

const styles = 'padding: 10px; background-color: white; color: green';

console.log('%cHello World', styles);

let firstName = 'John';
let lastName = 'Dow';

console.log(firstName, lastName);

let age = 30

console.log(age);

const person = {
    name: 'Brad',
};

person.name = 'John';
person.email = 'john@gmail.com';

console.log(person);