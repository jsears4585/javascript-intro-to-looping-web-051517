var forLoop = (arr) => {
  for (i = 0; i < 25; i++) {
    arr.push(`"I am ${i} strange loops."`);
  }
  return arr;
}

var whileLoop = (n) => {
  while (n > 0) {
    console.log(n);
    n -= 1;
  }
  return "done";
}

var doWhileLoop = (arr) => {
  do {
    arr.pop();
  } while (arr.length > 1)
  return arr;
}
