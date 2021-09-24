function bestSum (targetNum, numbers, memo={}) {
  if(targetNum in memo) return memo[targetNum];
  if(targetNum === 0) return [];
  if (targetNum < 0) return null;
  
  let shortest = null;
  for(let num of numbers) {
    const r = targetNum - num;
    const result = bestSum(r, numbers, memo)
    if(result) {
       const value = [...result, num]
      if(!shortest || value.length < shortest.length) {
        shortest = value;
      }
    }
  }
  memo[targetNum] = shortest
  return memo[targetNum]
}

bestSum(7,[2,3]);
bestSum(20,[2,5,10]);
bestSum(300,[23,14,100]);