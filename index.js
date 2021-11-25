// Leo workshop

// console.log('A')

// const callback = () => {
//   console.log('B')
// }

// console.log('C')

// setTimeout(callback, 0)

// console.log('D')

// =======
// exercise 2

// const callback = () => {
// 	console.log('hello')
// }

// setTimeout(callback, 1000)

// the callback function outputs 'hello' to the terminal, 
// setTimeout invokes callback with a time delay of a 1000 milliseconds. 
// setimeout anc callback are functions

// =======
// exercise 4
// console.log('A')

// const callback = () => {
// 	console.log('B')
// }

// console.log('C')

// setTimeout(callback, 0)

// console.log('D')

// A is printed
// C is printed
// a race between B and D - B would be called first but because of the function it is delayed.
// D is printed because it is a simple console.log and not a callback function
// then B is finally printed. 

// =============
// exercise 6
let a = 10

const callback = () => {
	a = 20
}
setTimeout(callback, 0)

console.log(a)

// variable a = 10 in line 49 
// then next we have a callback fucntion that changes that variable to =20
// then we have the setTimeout(callback,0) which takes longer to happen than the simple console.log in line 56, 
// and therefore line 56 gets printed with the value of 10. 