function secondLargest(arr){
  let firstLargest = -Infinity;
  let secondLargest = -Infinity

  for(let i=0; i <arr.length; i++){
    if(arr[i] > firstLargest){
      secondLargest = firstLargest
      firstLargest = arr[i]
    }
    else if(arr[i] > secondLargest && arr[i] != firstLargest){
      secondLargest = arr[i]
    }
  }
  return secondLargest
}
let arr = [10, 20, 20, 15]
const result = secondLargest(arr)

console.log(result)