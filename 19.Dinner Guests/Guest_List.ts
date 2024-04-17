
let Guest_List :string[] =['Arsal','Mudassir','Ahmed','Ahad'];
//for(let i=0; i<Guest_List.length; i++){
//   console.log('Dear Mr. ' +  Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!')
//}

let absend_Guest :string = 'Ahad' ;
let new_Guest :string = 'Maher' ;
Guest_List[0]=new_Guest ;

//for(let i=0; i<Guest_List.length; i++){
//    console.log('Dear Mr. ' +  Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!')
// }

// console.log(`Mr.${absend_Guest} is not coming to party.`);
// console.log(`Good News! We find Big tabel So we are inviting 3 more ghusts.`)

// arrey me 3 guest add kiye hain.
Guest_List.unshift('Jazaib Ahmed') ;
Guest_List.splice(2 ,0 , 'Hina Naseer');
Guest_List.push('Areeb Ahmed');

// Yaha par men 6 ghust ke arrey ko print kraya he.
// for(let i=0; i<Guest_List.length; i++){
//    console.log('Dear Mr. ' +  Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!')
// }  

// Sorry Massage to guest for not inviting.
// console.log('\nSorry we can not arrange big tabel, Only Two people will be invited.');

// Yaha Per mane Guest remove kiye hain.
while(Guest_List.length > 2){
   let remove_Guest = Guest_List.pop();
// console.log(`Sorry Mr. ${remove_Guest}, You are not invited for Dinner.`);
} 

// Hamre bacha howa 2 Invited Guest.
// for(let i=0; i<Guest_List.length; i++){
//    console.log('Dear Mr. ' +  Guest_List[i] + ',\n\nYou are still invited.\n\nThank You!\n\n')
// }    

// Mane sare ghuest array se remove kar diya.
Guest_List.slice(0, 2);
console.log(Guest_List);


// Exercise 19 

// print a message indicating the number of people you are inviting to dinner.

console.log(`Total number of Guest Are: ${Guest_List.length}`);
