const allConstruct = (target, words) => {
  const table = Array(target.length + 1)
    .fill()
    .map(() => []);
  table[0] = [[]];

  for (let i = 0; i <= target.length; i++) {
    for (let word of words) {
      if (target.slice(i, i + word.length) === word) {
        const combinations = table[i].map((arr) => [...arr, word]);
        table[i + word.length].push(...combinations);
      }
    }
  }
  return table[target.length];
};

console.log(allConstruct('aba', ['a', 'b', 'ab', 'ba']));
console.log(
  allConstruct('feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
    'e',
    'ee',
    'eee',
    'eeee',
    'eeeeee',
    'eeeeeee',
  ])
);
