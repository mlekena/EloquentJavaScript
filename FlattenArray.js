/*
Flattening

Use the reduce method in combination with the concat method to “flatten” an array of arrays into a single array that has all the elements of the input arrays.

var arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
// → [1, 2, 3, 4, 5, 6]
*/function flatten(array){
  function ensureIsArray(item){
    console.log(Array.isArray(item));
    if (Array.isArray(item) === false){ // didnt use ! because it just isnt discriptive
      return [item];
    }
    return item;
  }
  return array.reduce(function(result, item){
    return ensureIsArray(result).concat(item);
    })
}

var arr = [1,2,[3,4],[5],6];
//flatten(arr);
console.log(flatten(arr));
