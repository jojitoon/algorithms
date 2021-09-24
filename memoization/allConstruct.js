function allConstruct(target, words, memo={}) {
 if(target in memo) return memo[target];
  if(target === '') return [[]];
  
  const lastResult = []
  for (let word of words ) {
    if(target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      const suffixWays = allConstruct(suffix, words, memo);
      const targetWays = suffixWays.map(sf => [word, ...sf]);
      lastResult.push(...targetWays);
    }
  }

  memo[target] = lastResult;
  return lastResult;
}

allConstruct('tester', ['te', 's', 'r','tes'])
allConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef',['e', 'ee', 'eee','eeee','eeeeee','eeeeeee'])
