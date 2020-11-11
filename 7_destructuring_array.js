const array1 = [1, 2, 3, 5];
const [a, b, c] = array1;
console.log(a, b, c);

const array2 = [1, 2, 3, 5];
const [, d] = array1;
console.log(d);

// многомерный массив
const line = [[1, 13], [2, 14]];
const [ [p1x, p1y], [p2x, p2y] ] = line;
console.log('first point = ', p1x, p1y, ', second point = ', p2x, p2y);

// значения по умолчанию
const permissions = ['admin', 'user'];
const [a1, b1, c1 = 'moderator'] = permissions;
console.log(c1);

const permissions1 = ['admin', 'user', 'author'];
const [a2, b2, c2 = 'moderator'] = permissions1;
console.log(c2);

// REST elements
const names = ['Ivan', 'Peter', 'Paul'];
const [name1, ...others] = names;
console.log(others);

// найдем животный, которые говорят squeak
const dict = {
    duck: 'quack',
    dog: 'woff',
    mouse: 'squeak',
    hamster: 'squeak'
};
// Без деструктуризации
/* const res = Object.entries(dict)
    .filter((arr) => arr[1] === 'squeak');
console.log(res); */
// Со деструктуризацией
const res = Object.entries(dict)
    .filter(([, value]) => value === 'squeak')
    .map(([key]) => key);
console.log(res);

// позволяет комбинировать деструктуризация для массивов и объектов
const shape = {
    type: 'segment',
    coordinates: {
        start: [10, 15],
        end: [17, 15]
    }
};
//деструктурищация для объекта
const { coordinates: { start: [...startPoint], end: [...endPoint] } } = shape;
console.log(startPoint, endPoint);