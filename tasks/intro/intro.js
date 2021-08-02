//Задача 1
// Данный код возвращает сумму разностей предыдущего эл-та из следующего, переданного массива. Асимптотика: время O(n), память O(1) 

// Задача 2

const arr = [14, 16, 19, 32, 32, 32, 56, 69, 72];
// Вариант с циклом
function getNum1(arr, bookSize) {
  let left = 0;
  let right = arr.length - 1;
 
  while (left <= right) {
   const middle = Math.floor((left + right) / 2);
    if (arr[middle] <= bookSize && arr[middle + 1] > bookSize) {
      return arr.length - (middle + 1);
    } else {
     arr[middle] > bookSize ? right = middle - 1 : left = middle + 1
    } 
  }
}
console.log(getNum1(arr, 32))

// Вариант с рекурсией
function getNum2(left, right, arr, bookSize) {
  const middle = Math.floor((left + right) / 2);

  if (arr[middle] <= bookSize && arr[middle + 1] > bookSize) {
    return arr.length - (middle + 1);
  }
  
  return arr[middle] > bookSize
   ? getNum2(left, middle - 1, arr, bookSize)
   : getNum2(middle + 1, right, arr, bookSize);
}
console.log(getNum2(0, arr.length - 1, arr, 32));
