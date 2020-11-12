/* import { add, PI } from './my_math.js'; */
// переменные можно переименовывать через add as a
/* console.log(add(2, 2));
console.log(PI); */

import G1,  * as calc from './my_math.js';
// можно импортировать все, что есть в my_math
console.log(calc.PI);
console.log(typeof G1);
