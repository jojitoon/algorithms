function canSum (targetNum, numbers, memo={}) {
  if(targetNum in memo) return memo[targetNum];
  if(targetNum === 0) return true;
  if (targetNum < 0) return false;
  for(let num of numbers) {
    const r = targetNum - num;
    if(canSum(r, numbers, memo) === true) {
       memo[targetNum]  = true
      return true
    }
  }
   memo[targetNum] = false
  return false
}

canSum(7,[2,3]);
canSum(20,[2,5]);
canSum(300,[7,14]);