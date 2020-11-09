// rest param - собирает несколько аргументов в массив
// spread - делает обратное

const array = [1, 2, 3];
const array2 = [7, 1, 10];

//старая запись для нахождения максимального
const resOld = Math.max.apply(Math, array);
console.log('old = ', resOld);

//новая запись для нахождения максимального
const resNew = Math.max(...array); // извлекает из массива и передает как обычные аргументы
console.log('new = ', resNew);

// можно делать для нескольких массивов
const resNew2 = Math.max(...array, ...array2);
console.log('new2 = ', resNew2);

// можно комбинировать с обычными аргументами!

// незаменим при создании новых массивов
// можно создавать копию массива 
const copy = [...array];
console.log('array = ', array);
console.log('copy = ', copy);