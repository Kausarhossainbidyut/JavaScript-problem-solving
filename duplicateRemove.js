// Write a function that removes duplicate values from the array. [22,24,22,33,35,33]

function removesDuplicates(arr){
  let result = []

  for(let i = 0; i<arr.length; i++){
    if(!result.includes(arr[i])){
      result.push(arr[i])
    }
  }
  return result
}

console.log(removesDuplicates([22,24,22,33,35,33]));