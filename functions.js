const notifyByEmail = (email) => {
  return `Email sent to: ${email}`;
};

const notifyByText = (phonenumber) => {
  return `Text sent to: ${phonenumber}`;
};

const notify = (parameter1, parameter2) => {
  return parameter2(parameter1);
};

console.log(notify("hello@makers.tech.test", notifyByEmail));
console.log(notify("+10000000000", notifyByText));



const addToBatch = (arr, num) => {
  if (arr.length > 10) {
    return arr;
  };
  return arr.concat(num);
};
console.log(addToBatch([1,2,3],4));
console.log(addToBatch([1,2,3,4],[5,6]));