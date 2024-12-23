//Modules protect their variables and functions from leaking

console.log('sum')

var x = 'Hello World'
function calSum(a,b){
    const sum=a+b
    return sum
}

module.exports={x:x,calSum:calSum}