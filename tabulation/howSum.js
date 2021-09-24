const howSum = (target, numbers) => {
  const table = Array(target + 1).fill(null);
  table[0] = [];
  for (let i = 0; i <= target; i++) {
    if (table[i]) {
      for (const num of numbers) {
        table[i + num] = [...table[i], num];
      }
    }
  }
  return table[target];
};

console.log(howSum(10, [5, 1, 2, 3, 4, 5])); // true
console.log(howSum(10, [1, 2, 3, 4, 5, 6])); // true
console.log(howSum(7, [2, 4])); // false
console.log(howSum(20, [3, 10, 5, 20, 20])); // true
console.log(howSum(7, [2, 3])); // true
console.log(howSum(20, [5, 2])); // true
console.log(howSum(300, [7, 14])); // false
