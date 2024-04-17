"use strict";
// Create a variable called alien_color 
let Alien_Colors = 'green';
//  Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
if (Alien_Colors === 'green') {
    console.log("Player Just earned 5 points !");
}
// Write one version of this program that passes the if test and another that fails. 
Alien_Colors = 'yellow';
// (The version that fails will have no output.)
if (Alien_Colors === 'green') {
    console.log("Player Just earned 5 points !");
}
