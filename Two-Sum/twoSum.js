// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

const twoSum = function (nums, target) {

  // Create an empty hash
  const map = {}

  // Loop over the numbers array
  for (let i = 0; i < nums.length; i++) {

    // By creating the remainder variable, we can then use it to look through our map hash to check if the other number needed to equal target is there
    const remainder = target - nums[i]

    // Now that we have the a value to search for, we use the 'in' operator with 'remainder in map'
    if (remainder in map) {

      // If 'remainder' is in fact in 'map', then we can return the two indexes by returning secondly the current index 'i' of our loop and firstly the value of map[remainder]
      return [map[remainder], i]
    }

    // If we break out of our if statement because it returns false, we then build our map with the key nums[i] and it's value which is it's index 'i'
    map[nums[i]] = i

  }

}

console.log(twoSum([2, 7, 11, 15], 9))
console.log(twoSum([2, 3, 4], 6))

// My Thoughts
// ===========

// Again creating an object seemed like a good choice to help us check the values in the array

// I've not seen the 'in' operator before so had to do some reading up on that

// I'm still getting the hang of visualising how to both return values from an object, like using [map[remainder]
// & also understanding the simplicity of using map[nums[i]] = i to populate an object
