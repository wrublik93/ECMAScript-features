// Ключевые слова let и const

let name = 'Ivan';
name = 'Bob';

const pi = 3.14;
// нельзя изменять
console.log('name: ', name);
console.log('pi = ', pi);

const array = ['Peter'];
// можно изменять ТОЛЬКО содержимое массива
array[0] = 'John';
console.log(array);

const obj = {
    name: 'Peter',
};
// можно изменять ТОЛЬКО содержимое объекта 
obj.name = 'Bob';
console.log('name: ', obj.name);

// Везде, где можно - используем const, иначе - let

// let и const - блочная область видимости
for (var i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i)
    }, i*100);
}