function forLoop(array) {
  for (var i = 0; i < 25; i++) {
    array.push(`I am ${i} strange loops.`)
  }
  return array;
}

function whileLoop(number) {
  while (number > 0) {
    console.log(--number)
  }
  return "done";
}

function doWhileLoop(array) {
  do {
    array.pop()
  } while (maybeTrue() && array.length > 0)
  return array;
}

function maybeTrue() {
  return Math.random() >= 0.5
}
