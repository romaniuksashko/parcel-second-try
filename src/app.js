// default імпорт
// import added from "./plus.js"

// console.log(added(5, 3));

// const result = added(5, 7);
// console.log(result);



// іменований імпорт
// import {add} from "./plus.js";

// const result = add(7, 7);
// console.log(result);


// import {minus} from "./plus.js";

// const resMinus = minus(6, 9);
// console.log(resMinus);



//
// import calculator from "./plus.js";
// console.log(calculator);


// const result3 = calculator.add(11, 6);
// console.log(result3);

// const result4 = calculator.minus(11, 6);
// console.log(result4);



//

import { nanoid } from "nanoid";

const people = [
  { name: "Олексій", lastName: "Лебедюк", age: 25 },
  { name: "Марія", lastName: "Коваль", age: 22 },
  { name: "Іван", lastName: "Шевченко", age: 30 },
  { name: "Андрій", lastName: "Мельник", age: 28 },
  { name: "Ольга", lastName: "Петренко", age: 24 },
  { name: "Василь", lastName: "Сидоренко", age: 35 },
  { name: "Наталія", lastName: "Гончар", age: 27 },
  { name: "Сергій", lastName: "Лисенко", age: 32 },
  { name: "Катерина", lastName: "Данилюк", age: 21 },
  { name: "Дмитро", lastName: "Кравчук", age: 29 }
];

const formatPeople = people.map(user => ({...user, id: nanoid()}));

console.log(formatPeople);


import * as calculator from "./plus.js";
const result3 = calculator.add(11, 6);
console.log(result3);