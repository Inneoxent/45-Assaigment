"use strict";
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
//  The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. 
// Call the function three times, using a different number of arguments each time
function makeSandwiche(item) {
    console.log('\nMaking your Sandwiche with');
    item.forEach(element => console.log("-" + element));
    console.log('Enjoy your Sandwich !\n');
}
makeSandwiche(['ham', 'chese', 'lettuce']);
makeSandwiche(['Turkey', 'Bacon']);
makeSandwiche(['Peanut', 'Butter', 'Jelly']);
