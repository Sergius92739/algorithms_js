// Функция слияния двух массивов
function merge(a, b) {
  const c = []
  let ia = ib = ic = 0;
  while (ia < a.length || ib < b.length) {
    if (ia === a.length) {
      c.push(b[ib++]);
    } else if (ib === b.length) {
      c.push(a[ia++]);
    } else {
      c.push(a[ia] <= b[ib] ? a[ia++] : b[ib++]);
    }
    ic += 1;
  }
  return c;
}
// console.log(merge([1, 3, 5, 16, 32, 56], [2, 4, 6, 7, 19, 37]));

// Функция сортировки слиянием
function mergeSort(arr) {
  if (!arr || !arr.length) {
    return null;
  }
  if (arr.length <= 1) {
    return arr;
  }
  const middle = Math.floor(arr.length / 2);
  const arrLeft = arr.slice(0, middle);
  const arrRight = arr.slice(middle);
  return merge(mergeSort(arrLeft), mergeSort(arrRight));
}
console.log(mergeSort([43, 2, 11, 54, 6, 31, 7, 1]));