// Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

// The returned array should be created such that returnedArray[i] = fn(arr[i], i).

// Please solve it without the built-in Array.map method.

const map = function (arr, fn) {
  // Create an empty array to push our results into
  let result = []

  // Create a loop
  for (let i = 0; i < arr.length; i++) {

    // Here we create a variable passing it our given function 'fn'
    // Assuming fn works exectly like the map method we first pass it the element & then the index value
    // As we're within a loop we can apply 'i' to arr iterating over every element within 'arr'
    let transformedValue = fn(arr[i], i)

    // We then take each iterations result and push it into our array 'result'
    result.push(transformedValue)
  }

  return result
}

// My Thoughts
// ===========

// As fn was defined as a mapping function we could assume that it would behave with the complete .map() method syntax

// arr.map(function(element, index, array){  }, this);

// So in order to pass the cass which was adding the index value to the original array elements we set transformedValue to fn(arr[i], i)

// I found this an interesting question that gets you to think about .map() in a different way, giving the need to fully understand how the method actually works. It's all to easy with .map() to forget the lesser used index, array){  }, this); portion of the method.
