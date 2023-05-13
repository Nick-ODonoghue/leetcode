// Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

// Specifically, ans is the concatenation of two nums arrays.

// Return the array ans.

const getConcatenation = function (nums) {

  // Create an empty array
  let ans = []

  // Grab the length of any given array
  let n = nums.length

  // Create a loop to track indexing
  for (let i = 0; i < n; i++) {

    // On each loop simple pass the element at index'i' into our array 'ans'
    ans[i] = nums[i]

    // Given that we need to 'concatenate' our given array in our answer we can use the length of the given array to assign the same value at index'i'
    // i = 0 + n(4), i = 1 + n(4), i = 2 + n(4) etc
    ans[i + n] = nums[i]
  }

  return ans

}

// My Thoughts
// ===========

// I think the only question to be asked before tackling this problem was how to insert nums[i] to any index of ans

// Using nums.length makes it very simple in the end
