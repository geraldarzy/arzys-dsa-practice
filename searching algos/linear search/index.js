//lets search for 12

function linearSearch (num,arr) {
    //loop arr to see if num is there
    //if found return the index
    //if not found return -1
    // arr.forEach((ele,val) => {
    //     if((ele === num)){
    //         return val
    //     }
    // });
    // return -1

    // why doesnt that forEach work

    for(let i = 0; i < arr.length;i++){
        if(arr[i] === num){
            return i
        }
    }
    return -1

}

console.log(linearSearch(12,[1,5,8,100,12,3,12]))