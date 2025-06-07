let arr = [10, 20, 1, 47, -7, -8];
count = 0
function searchElement(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }
  return count;
}
const result = searchElement(arr); // returns 3
console.log(result); // Output: 3