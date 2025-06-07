let arr = [10, 20, 1, 47, 7];

function searchElement(arr, element) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      return i;
    }
  }
  return -1;
}
const result = searchElement(arr, 10); // returns 3
console.log(result); // Output: 3