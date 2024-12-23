require('./xyz')
// const {x,calSum}=require('./calculate/sum')
// var name='namaste node'
// const mul=require('./calculate/multiply')

const obj=require('./calculate/index')

var a=10
var b=20
// var x=100
// console.log(name)s
//console.log(a+b) 
var sum=obj.calSum(a,b)
obj.calMul(a,b)
console.log(sum)
console.log(obj.x)
// console.log(global)
// console.log(this)//empty object

// console.log(globalThis)

// console.log(globalThis === global)