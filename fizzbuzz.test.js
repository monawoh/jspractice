const fizzbuzz = require('./fizzbuzz')

// it should return "Fizz" if the number is divisible by 3 (e.g 3 or 9)
// it should return "Buzz" if the number is divisible by 5 (e.g 5 or 10)
// it should return "FizzBuzz" if the number is divisible by 15 (e.g 15 or 30)
// it should just return the number the number is otherwise


// describe('add', () => {
//   it('adds 2 and 2', () => {
//     expect(add(2, 2)).toBe(4);
//   });
// });


describe('fizzbuzz', () => {
  it ('returns "Fizz" if divisible by 3', () => {
    expect(fizzbuzz(9)).toBe('Fizz');
  });

  it ('returns "Buzz" if divisible by 5', () => {
    expect(fizzbuzz(10)).toBe('Buzz');
  });

  it ('returns "Fizzbuzz" if divisible by 15', () => {
    expect(fizzbuzz(15)).toBe('FizzBuzz');
  });

  it ('returns number if number is otherwise', () => {
    expect(fizzbuzz(2)).toBe(2);
  });
});


// console.log(fizzbuzz(9 = "Fizz"));