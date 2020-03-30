'use strict';

let person = {
    name: "Tom",
    age: 30,
    isGay: true
};

console.log(person["name"]);

let arr = ['plum.png', 'orange.jpg', 'apple.bmp'];

console.log(arr[1]);

//alert("pIZDEC!");

//let answer = confirm("Are you vagan?");

//console.log(answer);

let answer = +prompt("Are you vegan?", "Yes");

console.log(typeof(answer));