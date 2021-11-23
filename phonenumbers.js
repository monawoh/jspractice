const checkLength = (phoneNumber) => {
  return phoneNumber.length <= 10;
};

console.log(checkLength("123456789012"));
console.log(checkLength("1234567890"));



const filterLongNumbers = (phoneNumbers) => {
  return phoneNumbers.filter(checkLength);
};

console.log(
  filterLongNumbers([
    "1763687364",
    "4763687363",
    "7867867862",
    "007867867862",
    "aaaaaaaaaaaaaaaaaaa",
  ])
);
