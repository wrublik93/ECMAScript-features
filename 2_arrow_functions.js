function square(x) {
    return x * x;
};
console.log(square(2));

const sq = (x) => x * x;
console.log(sq(3));
// если записана в одну строку - return не нужен

const arr = ['1', '3', '2', '4'];
const res = arr
    .map((elem) => parseInt(elem))
    .filter((num) => num % 2)
    .reduce((max, value) => Math.max(max, value));
console.log('max value = ', res);

const sq2 = (x) => {
    return x * x;
};
// если несколько строк - return + {}
console.log(sq2(5));

// сохраняют значения ключевого слова this
// нет свойства prototype
// не могут быть вызваны с помощью new

