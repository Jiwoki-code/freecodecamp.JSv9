let year = 2000;
function isLeapYear(testYear){
  if (testYear % 4 === 0 && (!(testYear % 100 === 0) || (testYear % 400 === 0))) {
    return `${testYear} is a leap year.`
  } else {
    return `${testYear} is not a leap year.`
  }
}
let result = isLeapYear(year);
console.log(result)