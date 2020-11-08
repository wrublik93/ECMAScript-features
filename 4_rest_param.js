// старая запись
function max() {
    // pseudo-array
    var numbers = Array.prototype.slice.call(arguments);
    console.log(numbers);
};

max(1, 3, 4, 5);

// новая запись
function maxNew(...numbers) {
    console.log(numbers);
};

maxNew(1, 4, 5, 6); // будет массив, не важно сколько аргументов
// если не будет аргументов вообще - пустой массив

function maxArgs(a, b, ...numbers) {
    console.log('sum = ', a + b);
    console.log(numbers);
};

maxArgs(1, 2, 3, 4, 5, 6);

// REST параметр ОБЯЗАН ИДТИ В КОНЦЕ!!!
// нельзя иметь больще одного рест параметра!
