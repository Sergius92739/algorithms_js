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
function getNum(arr, bookSize, left = 0, right = arr.length - 1) {
  const middle = Math.floor((left + right) / 2);

  if (arr[middle] <= bookSize && arr[middle + 1] > bookSize) {
    return arr.length - (middle + 1);
  }
  if (right <= 0) {
     return arr.length;
  }
  if (left >= right) {
     return 0;
  }
  arr[middle] > bookSize ? right = middle - 1 : left = middle + 1;

  return getNum(arr, bookSize, left, right);
}

// Вариант с внутренней функцией
function getNum(arr, bookSize) {
  const func = (left = 0, right = arr.length - 1) => {
    const middle = Math.floor((left + right) / 2);

    if (arr[middle] <= bookSize && arr[middle + 1] > bookSize) {
      return arr.length - (middle + 1);
    }
    if (right <= 0) {
      return arr.length;
    }
    if (left >= right) {
      return 0;
    }
    arr[middle] > bookSize ? right = middle - 1 : left = middle + 1;
    return func(left, right);
  }
  return func()
}
