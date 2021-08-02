//Задача 1
// Данный код возвращает сумму разностей предыдущего эл-та из следующего, переданного массива. Асимптотика: время O(n), память O(1) 

// Задача 2
const arr = [14, 16, 19, 32, 32, 32, 56, 69, 72];

function getNumOfLargeSizedBooks(arr, bookSize) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
   const middle = Math.floor((left + right) / 2);
    if (arr[middle] <= bookSize && arr[middle + 1] > bookSize) {
      return arr.length - (middle + 1);
    } else if (arr[middle] > bookSize) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
}

console.log(getNumOfLargeSizedBooks(arr, 32))