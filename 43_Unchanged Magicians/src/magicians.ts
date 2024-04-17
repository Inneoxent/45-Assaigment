// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

let magician : string[] = ['Harry Potter' , 'Albus Dumbledore' , 'Harmione Granger' , 'Ron Weasley'];

function copyArray(arr:string[]){
  return [...arr]
}

function make_great(magicianArray: string[] ){
    
    for(let i=0; i<magicianArray.length; i++){

        magicianArray[i] = ' the Great ' +  magicianArray[i]
    }
}

function show_magicians(magicians: string[]){
     
    magicians.forEach(element => {
        console.log(element);
     });
}

const copyMagicianArray = copyArray(magician)

make_great(copyMagicianArray);

console.log('\n\nThis is my orignal array:');
show_magicians(magician);

console.log('\n\nThis is my modfied copy of the  array:');
show_magicians(copyMagicianArray);