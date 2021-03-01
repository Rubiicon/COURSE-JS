const array = [1, 2, 3, 4, 5, 6, 7];


function foreach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
}

function callback(value, index, arr) {

}

foreach(array, callback);