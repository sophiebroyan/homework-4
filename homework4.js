//1. array slice

function slice(start, end, array) {
  let shallowCopy = [];
  for (let i = start; i < array.length; i++) {
    if (i < end) {
      shallowCopy.push(array[i])
    }
  }
  return shallowCopy;
}
console.log(slice(2, 6, [6,4,3,6,8,9,2,1]));



//2. array includes

const array = [1, 6, 4, 5, 8];

function includes(arr, number) {
  for (let i of arr) {
    if (i === number) {
      return true;
    }
  }
  return false;
}
console.log(includes(array, 8));



//3. string indexof

function indexof(text, letter) {
  for (let i in text) {
    if (text[i] === letter) {
      return i;
    }
  }
  return -1;
}
console.log(indexof());



//4. array indexof

function indexof(array, value) {
    for (let i in array) {
      if (array[i] === value) {
        return i;
      }
    }
    return -1;
  }
  console.log(indexof())
  

  //5. string replace all

  function replaceAll(text, str1, str2) {
    let result = text.split(str1).join(str2)
  
    return result;
  }
  console.log(replaceAll('', '', ''));
  
