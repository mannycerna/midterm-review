/*
//-----     crosssArray     -----
let array1 = [5, 7, 14, 5];
let array2 = [6, 2, 22, 1];
let combinedArray = [];

 let a1, a2 = Math.min(array1.length, array2.length);

function crossArray(array1, array2){
    
    for(i = 0; i < a2; i++){
        combinedArray.push(array1[i], array2[i]);
    }


return combinedArray;
};
console.log(crossArray(array1, array2));

//-----     foundCat     ----- 
let noCatArray = ["dog", "skunk"];
let catArray = ["hello", "goodbye", "yes", "no", "gato", "cat"];
let allCatArray = ["cat", "cat"]
let allDogArray = ["woof", "dog"]


function foundCat(array){

    for(let i = 0; i < array.length; i++){
        
        if(array[i] === 'cat'){
            return true;
        }
    }
    return false;
}

console.log(foundCat(noCatArray));

//-----     oddOnesOut (*1 see notes below)     -----
let oddOneArray1 = [1,2,1,1,3,5,1];
let oddOneArray2 = [0,-1,5,1,5,0];
let oddOneArray3 = [1,1,1,1,1,1];

function oddOnesOut(array){

for(let i = 0; i <= array.length - 1; i++){
    if(array[i] === 1){
        array.splice(i,1);
        i--; 
      
        
    }

}

return array;

}console.log(oddOnesOut(oddOneArray1));


//-----     stringSpace     -----
let str1 = 'string';
let str2 = 'wow';
let str3  = 'hello world';

function stringSpace(string){
    return string.split('').join(' ');
}
console.log(stringSpace(str1));
console.log(stringSpace(str2));
console.log(stringSpace(str3));


let strComp1 = 'cat';
let strComp2 = 'cow';
let strComp3 = 'count';
let strComp4 = 'touch';
let strComp5 = 'well';
let strComp6 = 'sell';

function stringCompareCounter(string1, string2){
    
    let index = [];
    let match = 0;
    for(i = 0; i < string1.length; ++i){
       
        if(string1[i] === string2[i]){
            index.push(i);
            ++match;
            
        }
         
    }
    console.log(`${match}(strings share same characters at indexes ${index})`);
    return match;

   }

console.log(stringCompareCounter(strComp1, strComp2));
console.log(stringCompareCounter(strComp3, strComp4));
console.log(stringCompareCounter(strComp5, strComp6));


//-----     duplicate     -----
let yesDupArray = ['hi', 'wow', 'hey', 'hi'];
let noDupArray = ['one', 'two', 'three'];
let nbrDupArray = [1, 7, 32, 1, 10, 2, 11];

function duplicate(array){
    for(i = 0; i < array.length; i++){
        for(j = 0; j < i; ++j) {
            if (array[i] === array[j]){
        return true; 
            }
        }   
    }
    return false;
}
console.log(duplicate(noDupArray));
*/

let character1 = {
    name: 'Cloud',
    atk: 100,
    def: 90
  };
  
  let character2 = {
    name: 'Sephiroth',
    atk: 150,
    def: 50
  };

function damageCalculator(char1, char2){
    console.log(`${char1.name} attacks ${char2.name}`)
    damage = char1.atk - char2.def
    if(damage <= 0){
        console.log("NO DAMAGE")
    } else
    return damage;
}
console.log(damageCalculator(character2, character1));
