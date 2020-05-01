//
// This module is meant to determine if a number is the sum of it's own digits aka an Armstrong number. as a solution to a bonus excercise.
//

const getDigits = (number) => {
    return Array.from(String(number), Number);
};

const calcArmstrong = (digits) => {
  const numberOfDigits = digits.length;
  return digits.reduce(
    (sum, digit) => {
      return sum + Math.pow(digit, numberOfDigits);
    }, 0
  );
};

export const isArmstrongNumber = (number) => {
  //An Armstrong number is a number that is the sum of its own digits each raised to the power of the number of digits.
  //153 = 1^3 + 5^3 + 3^3 
  const digits = getDigits(number);
  return number === calcArmstrong(digits);
};