/* *****
Challenge 1

"Readable Time"

The function "readableTime" accepts a positive number as argument,
you should be able to modify the function to return the time from seconds
into a human readable format.

Example:

Invoking "readableTime(3690)" should return "01:01:30" (HH:MM:SS)
***** */

const readableTime = (seconds) => {
  const clockHours = Math.floor(seconds/3600);
  const clockMinutes = Math.floor((seconds%3600)/60)
  const clockSeconds = seconds - clockHours*3600 - clockMinutes*60
  const result = `${10>clockHours && '0'}${clockHours}:${10>clockMinutes && '0'}${clockMinutes}:${clockSeconds}`
  return result
};

readableTime(458);
readableTime(3690);
readableTime(7293);
readableTime(32420);

/* *****
Challenge 2

"Circular Array"

Given the following array "COUNTRY_NAMES", modify the function "circularArray"
to return an array that meets the following criteria:

- The index number passed to the function should be the first element in the resulting array
- The resulting array must have the same length as the initial array
- The value of the argument "index" will always be a positive number

Example:

Invoking "circularArray(2)" should return "["Island", "Japan", "Israel", "Germany", "Norway"]"
***** */

const COUNTRY_NAMES = ["Germany", "Norway", "Island", "Japan", "Israel"];

const circularArray = (index) => {
  const position = index>COUNTRY_NAMES.length-1 ? index-COUNTRY_NAMES.length:index
  let filterCountry = COUNTRY_NAMES.filter( country => country !== COUNTRY_NAMES[position] )
  filterCountry.unshift(COUNTRY_NAMES[position])
  return filterCountry
};

circularArray(2);
circularArray(3);
circularArray(5);
circularArray(9);

/* *****
Challenge 3

"Own Powers"

The function "ownPower" accepts two arguments. "number" and "lastDigits".

The "number" indicates how long is the series of numbers you are going to work with, your
job is to multiply each of those numbers by their own powers and after that sum all the results.

"lastDigits" is the length of the number that your function should return, as a string!.
See example below.

Example:

Invoking "ownPower(10, 3)" should return "317"
because 1^1 + 2^2 + 3^3 + 4^4 + 5^5 + 6^6 + 7^7 + 8^8 + 9^9 + 10^10 = 10405071317
The last 3 digits for the sum of powers from 1 to 10 is "317"
***** */

const ownPower = (number, lastDigits) => {
  let numberSum = 0

  for( let i=1; number>=i; i++){
    numberSum += Math.pow(i,i)
  }
  // use BigInt in case the sum is very large
  const wordSum =  BigInt(numberSum).toString()

  return wordSum.slice(wordSum.length-lastDigits, wordSum.length)

};

ownPower(10, 3);
ownPower(12, 7);
ownPower(21, 12);

/* *****
Challenge 4

"Sum of factorial digits"

A factorial (x!) means x! * (x - 1)... * 3 * 2 * 1.
For example: 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800

Modify the function "digitSum" to return a number that
equals to the sum of the digits in the result of 10!

Example:

Invoking "digitSum(10)" should return "27".
Since 10! === 3628800 and you sum 3 + 6 + 2 + 8 + 8 + 0 + 0
***** */

const digitSum = (n) => {
  let numberFactorial = 1
  let sumDigits = 0
  for(let i=1 ; n>=i ; i++){
    numberFactorial = numberFactorial*i
  }
  BigInt(numberFactorial).toString().split('').forEach( digit => {
    sumDigits += parseInt(digit)
  });

  return sumDigits
};

digitSum(10);
digitSum(42);
digitSum(71);
digitSum(89);

/* *****
Challenge 5

"N-Digit Fibonacci Number"

Modify the function "fibIndex" to return the index of the first Fibonacci
number whose digits-length equals the number passed in to the function.

Example:

Invoking "fibIndex(3)" should return "12".
Because the 12th index in the Fibonacci sequence is 144, and 144 has three digits
***** */

const fibIndex = (n) => {
  let index = 3
  let fibNum1=1 
  let fibNum2=2
  let fibLast=2
  while(fibLast.toString().length !== n ){
    fibLast = fibNum1 + fibNum2
    fibNum1 = fibNum2
    fibNum2 = fibLast
    index++
    
  }
  return index
};

fibIndex(3);
fibIndex(5);
fibIndex(12);
fibIndex(15);

exports.readableTime = readableTime;
exports.circularArray = circularArray;
exports.ownPower = ownPower;
exports.digitSum = digitSum;
exports.fibIndex = fibIndex;
