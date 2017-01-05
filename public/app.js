console.log('contains vowel')

/**
 * 01 | constainsVowel
 * 
 * Write a function called containsVowel that takes a single string and returns true if there is
 * at least one value or false otherwise.
 *  
 * Return boolean
 */

function isVowel(letter) {
    function isLetter(current) {
        return current === letter;
    }
    // Option 1
    //if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') 
    //Option 2
    //if(['a', 'e', 'i', 'o', 'u'].indexOf(letter) !== -1)

    // Option 4
    if (['a', 'e', 'i', 'o', 'u'].filter(isLetter).length > 0) {
    //Option 3
    if (['a', 'e', 'i', 'o', 'u'].includes(letter))
    {
        return true;
    } else {
        return false;
    }
}
}

// function containsVowel(word) {
//     let letters = word.split('');

//     // 1. break the owrk into letters (split)
//     // 2. find out which of these letters are vowels
//     // 3. if one or more are, return true
    
//     return letters.filter(isVowel).length > 0;
// }

//console.log(containsVowel('hey'));


console.log('MULTIPLES');

/**
 * 04 | multiples

Write a function called multiples that accepts two numbers and returns an array of all numbers from 1 - 100 that are evenly divisible by both.
 */

function range(min, max) {
  let arr = [];
  
  for (let i = min; i <= max; i++) {
    arr.push(i);
  }
  
  return arr;
}

function multiples (first, second) {
    function isDivisible(current) {
        return (current % first === 0) && (current % second === 0); // true if divisible by 'first', false otherwise
    }
    // 1. start with an array 1 - 100(range)
    // 2. keep things divisible by first and second, discard the rest (filter)
    let nums = range(1, 100).filter(isDivisible);
    console.log(nums);

    return nums
}

console.log(multiples(5, 7));



/**
 * 03 | boost

Write a function called boost that accepts a number as a parameter and increments all of the digits of the number individually. If the digit is 0-8, it should be incremented, but if its 9 then it should be reset to 0. Return the incremented number.

boost(129);   // 230
boost(49);    // 50
boost(48);    // 59
boost(412);   // 523
 */

// write a function that excepts 1 -29
//boost(48)
// 1. convert 48 to [4,8] suggestion, convert to string, then split, then parseInt
// 2. Increment all the digits (or go back to 0 if its a 9)
// 3. Recombine them with .join()

function boost(num) {
    function parse(digit) {
        return parseInt(digit);
    }

    function increment(single) {
        if(single < 9) {
            return single + 1;
        } else {
            return 0;
        }
    }

    let digits = num.toString().split('')// note: array of STRING
    console.log(digits);
    // parseInt(digits[0])
    // parseInt(digits[1])...
   digits = digits.map(parse) 
    console.log(digits.map(parse));
    return parseInt(digits.map(parse).map(increment).join(''));
}

boost(5629);
console.log(boost(5629));




console.log('DIVISORS');
/**
 * 02 | divisors

Write a function called divisors that accepts a number and returns an array of all of the numbers that divide evenly into it.
 */

// function divisors (num) {
//  let arr = [];
//  for(let i = 1; i < num; i++) {
//      if( num % i === 0) {
//          arr.push(i);
//      }
//  }
//  return arr;
// }

function divisors(num) {
    console.log('someting wong')
}

console.log(divisors(25));



/**
 * Part 2: reinventing map and filter

Write your own map and filter functions that do the same thing as the built-in array.map and array.filter functions. You cannot use the built-in map or filter! Use loops instead.

Your functions should accept TWO parameters instead of one: the array and the callback function.

The following code should work with your functions:
*/
function addFive(n) {
   return n + 5;
}

function square(n) {
  return n * n;
}

function greaterThanEleven(n) {
   return n > 11;
}

function map (arr, add) {
    let nums =[];
    for (let i = 0; i < arr.length; i++) {  
        nums.push(add(arr[i]));
    }
    return nums;
}

function filter (num, func) {
    //let greats = [],
    for (let i = 0; i < num.length; i++)
     {
        console.log(num[i]);
        if (num[i], func === true) {
            console.log(func,num[i]);
        }
    }
}   

console.log(map([7, 1, 5, 2], addFive));                  // [12, 6, 10, 7]
console.log(map([6, 3, 15, 4], addFive));                 // [11, 8, 20, 9]
console.log(map([6, 3, 15, 4], square));                  // [36, 9, 225, 16]
console.log(filter([7, 21, 45, 102], greaterThanEleven)); // [21, 45, 102]
console.log(map([7, 21, 45, 102], greaterThanEleven));    // [false, true, true, true]
 