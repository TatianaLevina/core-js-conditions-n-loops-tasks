/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  if (a > b) {
    if (a > c) {
      return a;
    }
    return c;
  }
  if (b < c) {
    return c;
  }
  return b;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  if (queen.x === king.x) return true;
  if (queen.y === king.y) return true;
  if (Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y)) return true;

  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a === 0 || b === 0 || c === 0) {
    return false;
  }
  if (a + b < c || a + c < b || b + c < a) {
    return false;
  }
  if (a === b) {
    return true;
  }
  if (a === c) {
    return true;
  }
  if (b === c) {
    return true;
  }
  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let result = '';
  if (num < 1) {
    result = '';
  }
  if (num >= 1) {
    result = `I${convertToRomanNumerals(num - 1)}`;
  }
  if (num >= 4) {
    result = `IV${convertToRomanNumerals(num - 4)}`;
  }
  if (num >= 5) {
    result = `V${convertToRomanNumerals(num - 5)}`;
  }
  if (num >= 9) {
    result = `IX${convertToRomanNumerals(num - 9)}`;
  }
  if (num >= 10) {
    result = `X${convertToRomanNumerals(num - 10)}`;
  }
  return result;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  function getSymbolValue(char) {
    switch (char) {
      case '0':
        return 'zero';
      case '1':
        return 'one';
      case '2':
        return 'two';
      case '3':
        return 'three';
      case '4':
        return 'four';
      case '5':
        return 'five';
      case '6':
        return 'six';
      case '7':
        return 'seven';
      case '8':
        return 'eight';
      case '9':
        return 'nine';
      case ',':
      case '.':
        return 'point';
      case '-':
        return 'minus';
      default:
        return '';
    }
  }
  let resultStr = getSymbolValue(numberStr[numberStr.length - 1]);
  for (let i = numberStr.length - 2; i >= 0; i -= 1) {
    resultStr = `${getSymbolValue(numberStr[i])} ${resultStr}`;
  }
  return resultStr;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  for (let i = 0; i < str.length / 2; i += 1) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 2
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      return i;
    }
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  const strNum = `${num}`;
  for (let i = 0; i < strNum.length; i += 1) {
    if (strNum[i] === String(digit)) {
      return true;
    }
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    let leftSum = 0;
    for (let j = 0; j < i; j += 1) {
      leftSum += arr[j];
    }
    let rightSum = 0;
    for (let k = i + 1; k < arr.length; k += 1) {
      rightSum += arr[k];
    }
    if (leftSum === rightSum) {
      return i;
    }
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  let value = 1;
  const matrix = new Array(size);
  for (let i = 0; i < size; i += 1) {
    matrix[i] = new Array(size);
  }
  let direction = 'right';
  let iBegin = 0;
  let iEnd = 0;
  let jBegin = 0;
  let jEnd = size - 1;
  while (value <= size ** 2) {
    switch (direction) {
      case 'right':
        for (let i = iBegin; i <= iEnd; i += 1) {
          for (let j = jBegin; j <= jEnd; j += 1) {
            matrix[i][j] = value;
            value += 1;
          }
        }
        direction = 'down';
        iBegin += 1;
        iEnd = jEnd;
        jBegin = jEnd;
        break;
      case 'down':
        for (let i = iBegin; i <= iEnd; i += 1) {
          for (let j = jBegin; j <= jEnd; j += 1) {
            matrix[i][j] = value;
            value += 1;
          }
        }
        direction = 'left';
        jBegin = iEnd - 1;
        jEnd = iBegin - 1;
        iBegin = iEnd;
        break;
      case 'left':
        for (let i = iBegin; i <= iEnd; i += 1) {
          for (let j = jBegin; j >= jEnd; j -= 1) {
            matrix[i][j] = value;
            value += 1;
          }
        }
        direction = 'up';
        iBegin = jBegin;
        iEnd = jEnd + 1;
        jBegin = jEnd;
        break;
      case 'up':
        for (let i = iBegin; i >= iEnd; i -= 1) {
          for (let j = jBegin; j <= jEnd; j += 1) {
            matrix[i][j] = value;
            value += 1;
          }
        }
        direction = 'right';
        jBegin += 1;
        jEnd = iBegin;
        iBegin = jBegin;
        iEnd = iBegin;
        break;
      default:
        break;
    }
  }

  return matrix;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const N = matrix.length;
  const rotMatrix = matrix;
  for (let i = 0; i < N / 2; i += 1) {
    for (let j = i; j < N - i - 1; j += 1) {
      const temp = rotMatrix[i][j];
      rotMatrix[i][j] = rotMatrix[N - 1 - j][i];
      rotMatrix[N - 1 - j][i] = rotMatrix[N - 1 - i][N - 1 - j];
      rotMatrix[N - 1 - i][N - 1 - j] = rotMatrix[j][N - 1 - i];
      rotMatrix[j][N - 1 - i] = temp;
    }
  }
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} array - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(array) {
  const arr = array;

  function partition(l, h) {
    let low = l;
    let high = h;
    const pivotEl = arr[low];
    while (low < high) {
      while (low < high && arr[high] > pivotEl) {
        high -= 1;
      }
      arr[low] = arr[high];
      while (low < high && arr[low] <= pivotEl) {
        low += 1;
      }
      arr[high] = arr[low];
    }
    arr[low] = pivotEl;
    return low;
  }

  function sort(low, high) {
    if (low >= high) {
      return;
    }
    const pivot = partition(low, high);
    sort(low, pivot - 1);
    sort(pivot + 1, high);
  }
  sort(0, arr.length - 1);
  return arr;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let arrResult = str.split('');
  for (let i = 0; i < Math.min(iterations, str.length); i += 1) {
    const arrTemp = new Array(arrResult.length);
    let insertIdx = 0;
    for (let j = 0; j < arrResult.length; j += 1) {
      if (j % 2 === 0) {
        arrTemp[insertIdx] = arrResult[j];
      } else {
        arrTemp[arrResult.length / 2 + insertIdx] = arrResult[j];
        insertIdx += 1;
      }
    }
    arrResult = arrTemp;
  }
  let shuffledStr = '';
  for (let i = 0; i < arrResult.length; i += 1) {
    shuffledStr += arrResult[i];
  }
  return shuffledStr;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  const arr = Array.from(`${number}`);
  function swapDigits() {
    let swapFrom = arr.length;
    let swapTo = -1;
    for (let i = arr.length - 1; i > 0; i -= 1) {
      for (let j = i - 1; j > swapTo; j -= 1) {
        if (arr[i] > arr[j]) {
          swapFrom = i;
          swapTo = j;
          break;
        }
      }
    }
    if (swapTo >= 0) {
      const temp = arr[swapFrom];
      arr[swapFrom] = arr[swapTo];
      arr[swapTo] = temp;
    }
    return swapTo;
  }
  const pos = swapDigits();
  if (pos < 0) {
    return number;
  }
  arr.push(...arr.splice(pos + 1).sort());
  return Number(arr.join(''));
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
