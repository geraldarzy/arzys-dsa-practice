//Write a function called binarySearch which accepts a sorted array 
//and a value and returns the index at which the value exists. Otherwise, return -1. 
//This algorithm should be more efficient than linearSearch - 
//you can read how to implement it here - https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search 
//and here - https://www.topcoder.com/community/data-science/data-science-tutorials/binary-search/
function binarySearch(arr,num){
    // add whatever parameters you deem necessary - good luck!
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start - end)/2);
    while(arr[middle] !== num){
        if(num < arr[middle]){
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end)/2);
    }
    return middle;

}
let x = [1,2,3,4,5,6,7,8,9,10,12,14,16,18,19,20,22,24]
console.log(binarySearch(x,16))