const includes = (arr, num) => {
  for (let i of arr) {
    if (i === num) {
      return true;
    }
  }
  return false;
};

// examples
console.log(includes([1, 4, 8, 3], 3)); // ==> true
console.log(includes([1, 4, 8, 3], 5)); // ==> false
