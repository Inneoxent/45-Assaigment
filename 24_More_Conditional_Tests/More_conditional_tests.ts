import { Console } from "console";

//equality and inequality  Test 1 
console.log("Equality test with strings: ", "Apple" === "Apple");
//equality and inequality  Test 2 
console.log("Inequality test with strings: ", ("Apple" as string) != "orange");

// Test using the lower case function
console.log("Lower case function test: ", "HELLO".toLowerCase() === "hello");

//Numercial tests involving equality and inequality
console.log("equality test with number:", 26 === 26);
//Numercial tests involving equality and inequality
console.log("inequality test with number:", (26 as  number ) != 35);

//, greater then less than
console.log("Greater than test:", 10 > 5);
// less than test
console.log("less than test:", 5 < 10 );

//greater than or equal to
console.log("greater then less than", 10 >= 10);
// less than or equal to
console.log("less than or equal to test", 5 <= 10);

// Tests using "and"  operators
console.log(" And operators test", 5===5 && 10 > 5);
// Tests using  "or" operators
console.log(" Or operators test", 5===5 || false);

// Test whether an item is in a array
const fruits :string[] = ['Apple','Mango','Orange',];
console.log('Test "Apple" in the array: ', fruits.includes("Apple"));

// Test whether an item is not in a array
console.log('testing "Amrood" is not in array: ', !fruits.includes("Amrood"));