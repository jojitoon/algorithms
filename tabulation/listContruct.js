const listContruct = (target, words) => {
  const table = Array(target.length + 1).fill(0);
  table[0] = [];
  for (let i = 0; i < target.length; i++) {
    for (let word of words) {
      if (table[i] && target.slice(i, i + word.length) === word) {
        table[i + word.length] = [...table[i], word];
      }
    }
  }
  return table[target.length];
};

console.log(listContruct('ab', ['a', 'b', 'ab']));
console.log(
  listContruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee', [
    'e',
    'ee',
    'eee',
    'eeee',
    'eeeeee',
    'eeeeeee',
  ])
);
