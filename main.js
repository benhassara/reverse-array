function reverseArray(array) {
  var out = [];
  for (var i = array.length - 1; i >= 0; i--) {
    out.push(array[i]);
  }
  return out;
}

function reverseArrayInPlace(array) {
  for (var i = 0; i < array.length / 2; i++) {
    var tmp = array[i];
    array[i] = array[array.length - (1 + i)];
    array[array.length - (1 + i)] = tmp;
  }
  return array;
}
