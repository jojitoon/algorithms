const bestSum = (target, numbers) => {
  const table = Array(target + 1).fill(null);
  table[0] = [];
  for (let i = 0; i <= target; i++) {
    if (table[i]) {
      for (const num of numbers) {
        const newArr = [...table[i], num];
        const old = table[i + num];
        if (!old || newArr.length < old.length) {
          table[i + num] = newArr;
        }
      }
    }
  }
  return table[target];
};

console.log(bestSum(10, [5, 1, 2, 3, 4, 5])); // true
console.log(bestSum(10, [1, 2, 3, 4, 5, 6])); // true
console.log(bestSum(7, [2, 4])); // false
console.log(bestSum(20, [3, 10, 5, 20, 20])); // true
console.log(bestSum(7, [2, 3])); // true
console.log(bestSum(20, [5, 2])); // true
console.log(bestSum(300, [7, 14])); // false
