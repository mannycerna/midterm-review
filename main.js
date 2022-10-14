let array1 = [5, 7, 14, 5];
let array2 = [6, 2, 22, 1];
let combinedArray = [];

 let a1, a2 = Math.min(array1.length, array2.length);

function crossArray(array1, array2){
    
    for(i = 0; i < a2; i++){
        combinedArray.push(array1[i], array2[i]);
    }


return combinedArray;
}
console.log(crossArray(array1, array2));