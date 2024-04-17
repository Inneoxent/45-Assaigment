"use strict";
let parsonName2 = "inneoxent abbasi";
//lower case
console.log(parsonName2.toLocaleLowerCase());
//upar case
console.log(parsonName2.toUpperCase());
//titlecase
console.log(parsonName2.replace(/\b\w/g, c => c.toUpperCase()));
