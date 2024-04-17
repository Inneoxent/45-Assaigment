"use strict";
let Guest_List = ['Arsal', 'Mudassir', 'Ahmed', 'Ahad'];
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!');
}
let absend_Guest = 'Ahad';
let new_Guest = 'Maher';
Guest_List[0] = new_Guest;
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!');
}
console.log(`Mr.${absend_Guest} is not coming to party.`);
