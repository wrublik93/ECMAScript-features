// если имя переменной и имя свойства совпадают, можно сократить
const x = 10;
const y = 5;

//так было раньше
const point = {
    x: x,
    y: y,
};

const p = {
    x,
    y,
};

console.log(p);

//можно использовать префиксы в свойствах объекта
const prefix = 'Name';
const dataName = {
    ['first' + prefix]: 'Ivan',
    ['last' + prefix]: 'Vrub',
};
console.log(dataName);

// появилась функция для копирования свойства из одного объекта в другой (перезапись одного объекта другим)
const defaults = {
    host: 'localhost',
    dbName: 'blog',
    user: 'admin',
};

const opts = {
    user: 'moderator',
    age: 25,
};

const res = Object.assign({}, defaults, opts);
console.log(res);

