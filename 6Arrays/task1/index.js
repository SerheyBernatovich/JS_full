function getArrayBounds(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  return [arr.length, arr[0], arr[arr.length - 1]];
}

//  examples
console.log(getArrayBounds([1, 10, 9, 11])); // ==> [4, 1, 11]
console.log(getArrayBounds(10, 12, 14)); // ==> null
console.log(getArrayBounds([1])); // ==> [1, 1, 1]

// // test

// // створюю функцію
// function script(str) {
//   // за допомогою тернарного оператора створюю ф-цію яка ставить (не ставить) крапку
//   const isDot = (index) => (index ? '.' : '');
//   // розбиваємо стрічку на масив підстрок ['a', 'b', 'c']
//   const arrayString = str.split('');
//   // проходимось по кожному елементу масиву і повертаемо новий масив ['abc', 'a.bc', 'ab.c']
//   const result = arrayString.map(
//     (_, i) => str.slice(0, i) + isDot(i) + str.slice(i)
//   );
//   //  додаємо в масив стрічку розділену крапками за кожним елементом (як по зразку) 'a.b.c'
//   result.push(arrayString.join('.'));

//   // повертаємо результат
//   return result;
// }
// // перевіряю
// console.log(script('abc'));
// console.log(script('abcj'));
// console.log(script(''));
//
//
// what method reduce work
//
// const fruitBasket = [
//   'banana',
//   'cherry',
//   'orange',
//   'apple',
//   'cherry',
//   'orange',
//   'apple',
//   'banana',
//   'cherry',
//   'orange',
//   'fig',
// ];
// const count = fruitBasket.reduce((tally, fruit) => {
//   tally[fruit] = (tally[fruit] || 0) + 1;
//   return tally;
// }, {});
// console.log(count); // { banana: 2, cherry: 3, orange: 3, apple: 2, fig: 1 }

// what output in consol

// let colors = ['Green', 'Red', 'Blue', 'Pink', 'Brown'];
// colors.copyWithin(3, 1, 2);
// console.log(colors);

// what output in consol

// var f = function () {
//   console.log(1);
// };
// var execute = function (f) {
//   setTimeout(f, 1000);
// };
// execute(f);
// f = function () {
//   console.log(2);
// };
// f();

// what output in consol

// let t = 5;
// console.log(t);
// function test() {
//   let t = 7;
//   return t++;
// }
// console.log(test());
// t = test();
// console.log(t);

// what output in consol

// numbers();
// var numbers = function () {
//   console.log('1');
// };
// numbers();
// function numbers() {
//   console.log('2');
// }
// numbers();
//
//
// append one array into another

// const num = [1, 2, 3, 4, 5];
// const str = ['a', 'b', 'c'];
// console.log(num.push.apply(num, str), num);
// // output [1, 2, 3, 4, 5, 'a', 'b', 'c']

//
// REPEAT USE
// const ukr = 'a';
// console.log(ukr.repeat(4));

// console.log(Array(4).fill(ukr).join(''));

// let arr = [2, 3, 4];
// let arr2 = arr.map((i) => console.log(i * 2));
// console.log(arr2)   [undefined, undefined, undefined]

// let string = 'You know nothing Jon Snow';
// let result = string.split(''); // You know nothing Jon Snow
// console.log(result);

// Сумма чисел з числа
//
// function sumDigits(num) {
//   if (num < 0) {
//     num = -num;
//   }

//   let sum = 0;
//   while (num > 0) {
//     sum += num % 10;
//     console.log(sum, num);
//     num = Math.floor(num / 10);
//     console.log(num);
//   }

//   return sum;
// }
// console.log(sumDigits(123));
//
//
// console.log(+true);//   return 1;
// console.log(+'');//   return 0;
//
//
//Як розділити на групи масив об'єктів по типу значення
// const p = [
//   {
//     id: 2,
//     title: 'fff',
//     country: 'ukr',
//   },
//   {
//     id: 2,
//     title: 'fff',
//     country: 'usa',
//   },
//   {
//     id: 2,
//     title: 'fff',
//     country: 'gbr',
//   },
// ];

// const product = p.reduce(
//   (acc, prod) => {
//     acc[prod.country.toLowerCase()].push(p);
//     return acc;
//   },
//   {
//     ukr: [],
//     usa: [],
//     gbr: [],
//   }
// );
// console.log(product);

// (function (a) {
//   return (function () {
//     console.log(a);
//     //  a = 6;
//   })();
// })(21);

// let a = NaN;
// let b = NaN;

// console.log(a == b); false
// console.log(a === b); false

// let Let = 'myValue';
// console.log(Let);

// const a = 5 + '5';
// x = a - 5;
// console.log(x); output= 50
