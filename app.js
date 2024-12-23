require('./xyz')
const obj=require('./sum')
// var name='namaste node'

var a=10
var b=20

// console.log(name)
//console.log(a+b) 
var sum=obj.calSum(a,b)
console.log(sum)
console.log(obj.x)
// console.log(global)
// console.log(this)//empty object

// console.log(globalThis)

// console.log(globalThis === global)