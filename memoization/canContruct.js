function canConstruct(target, words, memo={}) {
 if(target in memo) return memo[target];
  if(target === '') return true;
  
  for (let word of words ) {
    if(target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      if(canConstruct(suffix, words, memo)===true) {
        memo[target] = true
        return true;
      }
    }
  }
  memo[target] = false
  return false;
}

canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef',['e', 'ee', 'eee','eeee','eeeeee','eeeeeee'])
