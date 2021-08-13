const arr = [10, 13, 16, 19, 22, 25, 28, 31, 34, 37, 40, 43, 46, 49, 52];

function mark(arr, left, right, level, levels) {
  if (left === right) {
    levels[left] = level;
    return;
  }
  let middle = Math.floor((left + right) / 2);
  levels[middle] = level;
  mark(arr, left, middle - 1, level + 1, levels);
  mark(arr, middle + 1, right, level + 1, levels);
}

function build(arr) {
  const levels = Array(arr.length).fill(0);
  mark(arr, 0, arr.length - 1, 0, levels);
  for (let i = 0; i < Math.max(...levels) + 1; i++) {
    let acc = '';
    for (let j = 0; j < arr.length; j++) {
      if (levels[j] === i) {
        acc += arr[j]
      } else {
        acc += '  ';
      }
    }
    console.log(acc)
  }
}
build(arr)