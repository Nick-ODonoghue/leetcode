// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

const isAnagram = function (s, t) {

  // Performa quick check on whether or not the given strings are even the same length
  if (s.length !== t.length) {
    return false
  }

  // Create two empty hashes so we can tally the characters in out given strings
  const countS = {}
  const countT = {}

  // Iterate over 's' parameter
  for (let char of s) {

    // char is a reference to each character in our string
    // = (countS[char] || 0) + 1 - This looks for the current char in our hash
    // If found it will return true ( countS[char] ) and increment the value by one
    // If not found it returns false( !countS[char] ), adds the key, sets it value to 0 and then increments by one
    countS[char] = (countS[char] || 0) + 1
  }

  for (let char of t) {
    countT[char] = (countT[char] || 0) + 1
  }

  // Itterate over one of our hashmaps
  for (let key in countS) {

    // A simple if not equal to the other hashmap to return false
    if (countS[key] !== countT[key]) {
      return false
    }
  }

  // We return tru if everything all counts are equal
  return true
}

console.log(isAnagram('anagram', 'naagram')) // True
console.log(isAnagram('words', 'nerds')) // False
console.log(isAnagram('word', 'nerds')) // False

// My Thoughts
// ===========

// The idea of the hashmaps came pretty quick to me, as it seemed like a logical way of storing the counts of characters

// The logic for actually adding the key value pairs and incrementing the values was a little more difficult and required some googling

// I felt like I knew how to solve this challenge but only got stuck on the logic for creating the hashmaps correctly
