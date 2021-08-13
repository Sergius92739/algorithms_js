/**
 * Вспомогательная функция, которая возвращает для полученных в параметрах координат направление, откуда
 * в эту клетку прибежит щенок если такой путь существует: U - если сверху, L - если справа, N - если,
 * щенок не может добраться в эту клетку. Если может прибежать с обоих направлений, то выбираем любое.
 * @param {Array} field поле, двумерный массив
 * @param {number} x координата по горизонтали
 * @param {number} y координата по вертикали
 * @param {Array} memory память, двумерный массив
 * @returns направление 
 */
function whereFrom(field, x, y, memory) {
  if (memory[y][x] !== '-') {
    return memory[y][x];
  }

  if (x > 0) {
    if (x - 1 === 0 && y === 0) {
      memory[y][x] = 'L';
      return memory[y][x];
    }
    if (field[y][x - 1] !== '*') {
      if (memory[y][x] !== '-') {
        return memory[y][x];
      } else {
        if (whereFrom(field, x - 1, y, memory) !== 'N') {
          memory[y][x] = 'L';
          return memory[y][x];
        }
      }
    }
  }
  if (y > 0) {
    if (x === 0 && y - 1 === 0) {
      memory[y][x] = 'U';
      return memory[y][x];
    }
    if (field[y - 1][x] !== '*') {
      if (memory[y][x] !== '-') {
        return memory[y][x];
      } else {
        if (whereFrom(field, x, y - 1, memory) !== 'N') {
          memory[y][x] = 'U';
          return memory[y][x];
        }
      }
    }
  }
  memory[y][x] = 'N';
  return memory[y][x];
}

/**
 * 
 * @param {Array} field поле, двумерный массив 
 * @param {number} x0 координата по горизонтали 
 * @param {*} y0 координата по вертикали
 * @param {*} memory память, двумерный массив
 * @returns двумерный массив с координатами
 */
function findPath(field, x0, y0, memory) {
  const path = [...field];

  path[y0][x0] = 'Ч';

  whereFrom(field, x0, y0, memory);

  while (x0 >= 0 && y0 > 0) {
    if (memory[y0][x0] === 'N') {
      console.log('Нет такого пути')
      break;
    }
    if (memory[y0][x0] === 'U') {
      path[y0 - 1][x0] = 'X';
      y0 -= 1;
    }
    if (memory[y0][x0] === 'L') {
      path[y0][x0 - 1] = 'X';
      x0 -= 1;
    }
  }

  path[0][0] = 'Щ';
  return path;
}

/**
 * Функция отрисовывает маршрут
 * @param {number} x координата по горизонтали
 * @param {number} y координата по вертикали
 */
function showPath(x, y) {
  const newField = [
    ['-', '-', '-', '*', '*', '-', '-', '-', '-', '-'],
    ['-', '-', '-', '-', '*', '-', '*', '*', '-', '-'],
    ['-', '-', '-', '*', '-', '*', '-', '-', '-', '*'],
    ['-', '*', '-', '-', '-', '-', '-', '-', '-', '-'],
    ['-', '-', '-', '-', '-', '-', '*', '-', '-', '-'],
    ['-', '-', '*', '-', '-', '*', '-', '-', '-', '-'],
    ['-', '-', '-', '*', '-', '-', '*', '*', '*', '-'],
    ['-', '-', '-', '-', '-', '-', '-', '*', '-', '-'],
    ['-', '-', '-', '-', '-', '-', '-', '*', '-', '-'],
    ['-', '-', '-', '-', '-', '*', '*', '-', '-', '-']
  ];
  const n = newField.length;
  const memory = Array.from(Array(n), () => new Array(n).fill('-'));
  findPath(newField, x, y, memory).forEach(e => console.log(e.join(' ')));
  console.log('')
}

showPath(8, 3);
showPath(8, 7);
showPath(7, 9);
showPath(9, 9);