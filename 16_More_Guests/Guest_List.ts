

let Guest_List :string[] =['Arsal','Mudassir','Ahmed','Ahad'];

//for(let i=0; i<Guest_List.length; i++){

 //   console.log('Dear Mr. ' +  Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!')

//}

let absend_Guest :string = 'Ahad' ;

let new_Guest :string = 'Maher' ;

Guest_List[0]=new_Guest ;

for(let i=0; i<Guest_List.length; i++){

    console.log('Dear Mr. ' +  Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!')

}

console.log(`Mr.${absend_Guest} is not coming to party.`);

console.log(`Good News! We find Big tabel So we are inviting 3 more ghusts.`)

Guest_List.unshift('Jazaib Ahmed') ;
Guest_List.splice(2 ,0 , 'Hina Naseer');
Guest_List.push('Areeb Ahmed');

for(let i=0; i<Guest_List.length; i++){

    console.log('Dear Mr. ' +  Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!')

}  