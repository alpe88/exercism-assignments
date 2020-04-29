//
// This function is meant to identify leap years as a solution to excercise 4.
//

const parameterIsNan = (year) => {
  return `parameter is not a number: ${year}`;
};

const leapYearRules = {
  four: 4,
  oneHundered: 100,
  fourHundred: 400
};

export const isLeap = (year) => {
  if(isNaN(year)) {
    throw new Error(parameterIsNan(year));
  }

  const divisibleBy4 = year % leapYearRules.four == 0;
  const divisibleBy100 = year % leapYearRules.oneHundered == 0;
  const divisibleBy400 = year % leapYearRules.fourHundred == 0;

  return (year % divisibleBy100 === 0) ? (year % divisibleBy400 === 0) : (year % divisibleBy4 === 0);
};

export const isLeapAlt = (year) => {
  if(isNaN(year)) {
    throw new Error(parameterIsNan(year));
  }

  return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
};

export const isLeapWithDates = (year) => {
  if(isNaN(year)) {
    throw new Error(parameterIsNan(year));
  }

  return year => new Date(year, 1, 29).getDate() === 29;
};