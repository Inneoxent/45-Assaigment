"use strict";
let parsonName = '';
parsonName = prompt(`what is ypur name`) || "";
if (parsonName !== null && parsonName !== '') {
    alert(`Hello ${parsonName}, would you like to learn some Python today?`);
}
else {
    alert(`you have to fill your name !`);
}
