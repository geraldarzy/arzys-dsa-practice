console.log(document.body.children[0]);
console.log('hello')

// power
// write a function called power which acceptes a base and an exponent. The function should return the power of the base to teh exponent. 
// This function should mimis the functionality of Math.pow() 
// do not worry about negative bases and exponents.
// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(base, exp){
    if(exp === 0) return 1;
    return base * power(base, exp - 1)
}
console.log(power(6,9))

function factorial(num){
    if(num === 0 ) return 1;
    return num * (factorial(num-1))
}

// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60
function productOfArray(arr){
    if(arr.length === 1){
        return arr.pop();
    }
    return arr.pop() * productOfArray(arr)
}

console.log('productOfArray = ',productOfArray([1,2,3,5,7,8]));

// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55 
function recursiveRange(num){
    if(num === 1){
        return num;
    }
    return num + recursiveRange(num-1)
}



// fibonacci sequence starts with 1 and 1 and every number thereafter 
// is equal to the sum of the previous two numbers
// 1, 1, 2, 3, 5, 8, ...
// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

function fib(n){
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}
console.log('fibonacci sequence is = ',fib(4))


function reverse(str){
    // add whatever parameters you deem necessary - good luck!
    let ret = ''
    return ret;
  }
  
  // reverse('awesome') // 'emosewa'
  // reverse('rithmschool') // 'loohcsmhtir'