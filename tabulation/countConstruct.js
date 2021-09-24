const countConstruct = (target, words) => {
  const table = Array(target.length + 1).fill(0);
  table[0] = 1;
  for (let i = 0; i < target.length; i++) {
    for (let word of words) {
      if (table[i] && target.slice(i, i + word.length) === word) {
        table[i + word.length] += table[i];
      }
    }
  }
  return table[target.length];
};

console.log(countConstruct('ab', ['a', 'b', 'ab']));
console.log(
  countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
    'e',
    'ee',
    'eee',
    'eeee',
    'eeeeee',
    'eeeeeee',
  ])
);
