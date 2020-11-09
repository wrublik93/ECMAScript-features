/* const person = {
    firstName: 'Ivan',
    lastName: 'Vrub',
    age: 27,
};

const firstNameOld = person.firstName;
const lastNameOld = person.lastName;

console.log('old first name: ', firstNameOld);
console.log('old last name: ', lastNameOld);

const { firstName, lastName, age } = person;
console.log('new first name: ', firstName);
console.log('new last name: ', lastName);
console.log('new age: ', age); */

// если есть вложенности
const person1 = {
    name: {
        first: 'Ivan',
        last: 'Vrub',
    },
    age: {
        year: 1993,
        fullYear: 27,
    },
};
const { name: { first, last }, age: { year, fullYear } } = person1;
console.log('name first: ', first);
console.log('name last: ', last);
console.log('age year: ', year);
console.log('age full year: ', fullYear);

console.log('/////////////////////////////////');

// можно переименовать константы
const person2 = {
    name: {
        first: 'Ivan',
        last: 'Vrub',
    },
    age: {
        year: 1993,
        fullYear: 27,
    },
};
const { name: { first: firstName, last: lastName } } = person2;
console.log('name first: ', firstName);
console.log('name last: ', lastName);

console.log('/////////////////////////////////');
// имеется возможность указать значение переменной по умолчанию
const person3 = {
    name: {
        first: 'Ivan',
        last: 'Vrub',
    },
    age: {
        year: 1993,
        fullYear: 27,
    },
    /* role: 'admin' */
};
/* const { role = 'user' } = person3;
console.log(role); */
// если нет такого свойства, можно указать пустой объект по умолчанию, иначе role не будет отображено
const { permissions: {role = 'user'} = {} } = person3;
console.log(role);

// деструктуризация аргументов функции
function connect({
    host = 'localhost',
    port = 12345
}) {
    console.log(host);
    console.log(port);
};

connect({});
console.log('/////////////////');
connect({host: 'new localhost'});
// чтобы не было ошибки, если нет передаваемых аргументов вовсе в самой функции необходимо указать значение по умолчанию = {}
/* function connect({
    host = 'localhost',
    port = 12345
} = {}) */

//REST ELEMENT
const speak = {
    duck: 'quack',
    dog: 'woff',
    mouse: 'pik',
};
const { duck, ... otherAnimals } = speak;
console.log(otherAnimals);
console.log(otherAnimals.dog);