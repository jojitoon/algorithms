function countConstruct(target, words, memo={}) {
 if(target in memo) return memo[target];
  if(target === '') return 1;
  
  let total = 0
  for (let word of words ) {
    if(target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      const count = countConstruct(suffix, words, memo);
      if( count> 0) {
        total+= count;
      }
    }
  }
  memo[target] = total
  return total;
}

countConstruct('tester', ['te', 's', 'r','tes'])
countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef',['e', 'ee', 'eee','eeee','eeeeee','eeeeeee'])
