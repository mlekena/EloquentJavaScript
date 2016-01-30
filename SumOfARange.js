function range(pointA, pointB){
  var start = 0;
  var end = 0;
  if (pointA < pointB){
    start = pointA;
    end = pointB;
  }
  else {
    start = pointB;
    end = pointA;
  }
  var length = Math.abs(end - start);
  var result = []
  for (var i = start; i < length; i++) {
    result.push(i);
  }
  return result;
}

function sum(numbers){
  var sum = 0;
  for (var i = 0; i < numbers.length; i++){
    sum += numbers[i];
  }
  return sum;
}
console.log(range(99999, -8));
console.log(sum(range(1,10)));
