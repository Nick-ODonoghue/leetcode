// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

//     I can be placed before V (5) and X (10) to make 4 and 9.
//     X can be placed before L (50) and C (100) to make 40 and 90.
//     C can be placed before D (500) and M (1000) to make 400 and 900.

// Given a roman numeral, convert it to an integer.

const romanToInt = function (s) {

  // Create an total 'counter'
  let total = 0

  // Create a hash of the Roman numerals and their values
  const sym = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }

  // We now need to loop through our hash, checking the current symbol against our keys
  // We also use the same loop to loop through the given Roman numeral string
  for (let i = 0; i < s.length; i++) {

    // Create a current symbol container
    const current = sym[s[i]]
    // Create a next symbol container
    const next = sym[s[i + 1]]

    // Logic checking if the current symbol character is less than the next symbol character
    if (current < next) {

      // If true, Roman numeral logic is to subtract the current symbols value from the next symbols value
      total += next - current

      // When this is true the Roman numeral number is not a single character but in fact both the current and next character
      // I(current)V(next) is not a 1 and a 5 but infact 4
      // Given this we need to increment i by 1 so as to skip checking the V(next) in the next loop
      i++
    } else {
      total += current
    }
  }
  return total
}

console.log(romanToInt('III'))
console.log(romanToInt('LVIII'))
console.log(romanToInt('MCMXCIV'))

// My Thoughts
// ===========

// It was pretty obvious to me to create the hash table for all the possible symbol values. This makes it relatively simple to check a character against a KeyboardEvent

// I sometimes struggle to picture looping in my head so can't right it out in code as I know it should be.
// Within this challenge looping through sym with s' index makes it easy to visualize what is going on within the loop.
// Realising that i++ was needed on line 55 also made sense after seeing the incorrect outputs from test cases.
