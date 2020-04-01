// 'use strict';

// let num = 20;

// function showFirstMessage(text) {
//     alert(text);
//     let num = 10;
// }

// showFirstMessage("Zdarova, daun");



// let calc = function (a,b) {
//     return (a+b);
// };

let calc = (a,b) => a+b;

console.log(calc(5,6));

console.log(calc(10,6));

function retVar() {
    let num = 50;
    return num;
}

let anotherNum = retVar();

let str = "test";
console.log(str.length);

console.log(str.toUpperCase());
console.log(str.toLowerCase());

let twelve = "12.2px";
//console.log(Math.round(twelve));
console.log(parseInt(twelve));
console.log(parseFloat(twelve));