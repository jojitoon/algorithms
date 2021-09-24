function hasSum(targetNum, numbers, memo = {}) {
  if (targetNum in memo) return memo[targetNum];
  if (targetNum === 0) return [];
  if (targetNum < 0) return null;
  for (let num of numbers) {
    const r = targetNum - num;
    const result = hasSum(r, numbers, memo);
    if (result) {
      memo[targetNum] = [...result, num];
      return memo[targetNum];
    }
  }
  memo[targetNum] = null;
  return memo[targetNum];
}

console.log(hasSum(7, [2, 3]));
console.log(hasSum(20, [10, 2, 5, 10]));
console.log(hasSum(300, [230, 14]));
