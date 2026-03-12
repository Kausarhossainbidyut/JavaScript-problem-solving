function findMiddle(arr){
  arr.sort((a,b)=>a-b)

  let mid = Math.ceil(arr.length/2)
  return arr[mid]
}

console.log(findMiddle([10,5,8,20,15]));
