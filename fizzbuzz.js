const fizzbuzz = (num) => {
  if (num % 3 === 0 && num % 5 === 0) {
    return "FizzBuzz";
  } else if (num % 3 === 0) {
    return "Fizz";
  } else if (num % 5 === 0) {
    return "Buzz";
  } else {
    return num;
  }
};
// for (let number = 1; number <= 50; number++) {
//   console.log(`Fizzbuzz result for ${number} is ${fizzbuzz(number)}`);
// }

// actual fuile gest the module and the test gets the require

module.exports = fizzbuzz;