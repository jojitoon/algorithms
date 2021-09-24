const canSum = (target, numbers) => {
  const table = Array(target + 1).fill(false);
  table[0] = true;

  for (let i = 0; i < target; i++) {
    if (table[i] === true) {
      for (const num of numbers) {
        table[i + num] = true;
      }
    }
  }

  return table[target];
};

console.log(canSum(10, [1, 2, 3, 4, 5])); // true
console.log(canSum(10, [1, 2, 3, 4, 5, 6])); // true
console.log(canSum(7, [2, 4])); // false
console.log(canSum(20, [3, 10, 5, 20, 2])); // true
console.log(canSum(7, [2, 3])); // true
console.log(canSum(20, [2, 5])); // true
console.log(canSum(300, [7, 14])); // false
