//remove duplicate from array

let arr = [1,2,3,5,2,5,8,4,6,7,9,7]
let unique = []

for(let i = 0; i<arr.length; i++){
  if(!unique.includes(arr[i])){
    unique.push(arr[i])
  }
}

console.log(unique);
