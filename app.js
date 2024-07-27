// 81
function uniqueWords(s = '') {
  let result = []
  let arr = s.split(" ").filter(item => item != "")
  arr.forEach(item => {
    if (arr.indexOf(item) === arr.lastIndexOf(item)) {
      result.push(item)
    }
  })
  return result
}

// Test case
// console.log(uniqueWords("this is a test this is only a test")); // Output: ["only"]
// console.log(uniqueWords("hello world hello")); // Output: ["world"]


// 82
function collectValues(obj) {
  let result = []
  let arr = [{ value: obj }]
  for (let i = 0; i < arr.length; i++) {
    let { value } = arr[i]
    for (let key in value) {
      if (typeof value[key] === "object") {
        arr.push({ value: value[key] })
      } else {
        result.push(value[key])
      }
    }
  }
  return result
}

// Test case
const obj = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
      f: {
        g: 4
      }
    }
  }
};
// console.log(collectValues(obj)); // Output: [1, 2, 3, 4]



// 83
function swapFirstLast(s = '') {
  let arr = s.split(" ").filter(item => item != "")
  let new_arr = arr.map(item => {
    let arr = item.split("")
    arr.push(...arr.splice(0, 1, arr.pop()))
    return arr.join("")
  })
  return new_arr.join(" ")
}

// Test case
// console.log(swapFirstLast("hello world")); // Output: "oellh dlorw"
// console.log(swapFirstLast("a quick brown fox")); // Output: "a kuicq nrowb fxo"


// 84
function indexOfMax(arr) {
  let max = Math.max(...arr)
  return arr.indexOf(max)
}

// Test case
// console.log(indexOfMax([1, 3, 7, 1, 2, 5, 7])); // Output: 2



// 85
function sqrtElements(arr) {
  let new_arr = arr.map(item => item * item)
  return new_arr
}

// Test case
// console.log(sqrtElements([1, 4, 9, 16, 25])); // Output: [1, 2, 3, 4, 5]


// 86
function separateEvenOdd(arr) {
  let juft = []
  let toq = []
  arr.map(item => item % 2 ? toq.push(item) : juft.push(item))
  return { toq, juft }
}

// Test case
// console.log(separateEvenOdd([1, 2, 3, 4, 5, 6, 7, 8, 9])); // Output: { even: [2, 4, 6, 8], odd: [1, 3, 5, 7, 9] }



// 87
function findCoprimePairs(arr) {
  let new_arr = []
  arr.forEach(item => {
    let i = 1
    let count = 0
    while (i <= item) {
      if (item % i == 0) {
        count++
      }
      i++
    }
    if (count === 2) {
      new_arr.push(item)
    }
  })
  return new_arr
}

// Test case
// console.log(findCoprimePairs([2, 3, 4, 5, 6, 7])); // Output: [2, 3, 5, 7]



// 88
function rotateArray(arr, k) {
  let i = 0
  while (i < k) {
    arr.unshift(arr.pop())
    i++
  }
  return arr
}

// Test case
// console.log(rotateArray([1, 2, 3, 4, 5], 2)); // Output: [4, 5, 1, 2, 3]



// 89
function trimmedMean(arr = []) {
  arr.sort((a, b) => a - b)
  let i = 0
  while (i < 2) {
    arr.pop()
    arr.shift()
    i++
  }
  let sum = arr.reduce((a, b) => a + b)
  return sum / arr.length
}

// Test case
// console.log(trimmedMean([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // Output: 5.5



// 90
function findPalindromes(arr = ['']) {
  let result = arr.filter(item => {
    let new_arr = +item.toString().split("").reverse().join("")
    return item == new_arr
  })
  return result
}

// Test case
// console.log(findPalindromes([121, 123, 202, 345, 454])); // Output: [121, 202, 454]



// 91
function allElementsEqual(arr = []) {
  let one_item = arr[0]
  let result = arr.every(item => item == one_item)
  return result
}

// Test case
// console.log(allElementsEqual([1, 1, 1, 1])); // Output: true
// console.log(allElementsEqual([1, 2, 1, 1])); // Output: false


// 92
function arraysHaveSameElements(arr1 = [], arr2 = []) {
  arr1.sort((a, b) => a - b)
  arr2.sort((a, b) => a - b)
  if (arr1.length !== arr2.length) {
    return false
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false
    }
  }
  return true
}

// Test case
// console.log(arraysHaveSameElements([1, 2, 3], [3, 2, 1])); // Output: true
// console.log(arraysHaveSameElements([1, 2, 3], [3, 2, 2])); // Output: false


// 93
function isUniqueSet(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
      return false
    }
  }
  return true
}

// Test case
// console.log(isUniqueSet([1, 2, 3, 4])); // Output: true
// console.log(isUniqueSet([1, 2, 3, 3])); // Output: false


// 94
function hasThreeConsecutiveEvenOrOdd(arr) {
  let i = 0;
  while (i < arr.length - 2) {
    let j = i + 1
    let k = j + 1
    if ((arr[i] % 2 == 0 && arr[j] % 2 == 0 && arr[k] % 2 == 0) || (arr[i] % 2 == 1 && arr[j] % 2 == 1 && arr[k] % 2 == 1))
      return true
    i++
  }
  return false
}

// Test case
// console.log(hasThreeConsecutiveEvenOrOdd([1, 2, 3, 4, 5, 6, 7])); // Output: false
// console.log(hasThreeConsecutiveEvenOrOdd([1, 2, 3, 4, 6, 8, 7])); // Output: true


// 95
function isMonotonic(arr = []) {
  let result
  let str = JSON.stringify(arr)
  let inc_str = JSON.stringify(arr.sort((a, b) => a - b))
  let dec_str = JSON.stringify(arr.sort((a, b) => b - a))
  if (str === inc_str || str === dec_str) {
    result = true
  } else {
    result = false
  }
  return result
}

// Test case
// console.log(isMonotonic([1, 2, 2, 3])); // Output: true
// console.log(isMonotonic([6, 5, 4, 4])); // Output: true
// console.log(isMonotonic([1, 3, 2])); // Output: false
