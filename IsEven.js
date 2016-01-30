function isEven(num){
  function even(num){
    if (num < 0){
      return "??"
    }
    if (num == 1){
      return "odd";
    }
    else if (num === 0) {
      return "even";
    }
    else{
      return even(num - 2);
    }
  }
  return even(num);
}

console.log(isEven(-177));
