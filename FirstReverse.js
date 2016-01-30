function FirstReverse(str) {

  var line = "";
  // code goes here
  for (var i = str.length - 1; i >= 0; i--){
    line += str.charAt(i);
  }
  console.log(line);
  return line;

}

// keep this function call here
// to see how to enter arguments in JavaScript scroll down
FirstReverse("readline()");
