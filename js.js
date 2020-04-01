// 'use strict';

// // function first(){
// //     setTimeout( function(){
// //         console.log(1);
// //     }, 500);
// // }

// // function second(){
// //     console.log(2);
// // }

// // first();
// // second();

// // function learnJs(lang, callback){
// //     console.log("I learn " + lang);
// //     callback();
// // }

// // function done() {
// //     console.log("I passed lesson 3");
// // }

// // learnJs("JavaScript", done);

// let options = {
//     width: 1024,
//     height: 1024,
//     name: "test"
// };

// console.log(options.name);
// options.bool = false;
// options.colors = {
//     border: "black",
//     bg: "red"
// };

// delete options.bool;

// console.log(options);

// for (let key in options){
//     console.log("Свойство " + key + ' имеет значение ' + options[key]);
// }
// console.log(Object.keys(options).length);

// let arr = ["first", 2, 3, "four", 5];

// arr.forEach(function(item, i, mass) {
//     console.log(i + ":" + item + " (массив:  "+ mass + ')');
// });


// let mass = [1,3,4,6,7];
// mass[99] = 99;
// let i = 1;
// for (let key in mass) {
//     console.log(i + " " + key);
//     i++;
// }

// // for (let i = 0; i < arr.length; i++){
// //     console.log(arr[i]);
// // }

// // arr.pop();
// // arr.push("5");
// // arr.shift();
// // arr.unshift("1");
// // console.log(arr);

// let ans = prompt("", ""),
//     arr = [];

// arr = ans.split(',');
// console.log(arr);

// let arr = ["aawe", 'zzz', 'pp', 'rqa'],
//     i = arr.join(', ');

// //console.log(arr);
// console.log(i);

let arr = [1,15,4],
    i = arr.sort(compareNum);

function compareNum(a,b) {
    return a-b;
}
console.log(i);

let soldier = {
    health: 100,
    armor: 100
};

let john = {
    health: 100
};

john.__proto__ = soldier;

console.log(john);
console.log(john.armor);

