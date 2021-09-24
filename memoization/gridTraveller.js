const gridTraveller = (n, m, memo={}) => {
  const key =`${n},${m}`;
  if (key in memo) return memo[key];
  if(n===1 && m ===1) return 1;
  if(n === 0 || m ===0) return 0;
  
  memo[key] = gridTraveller(n, m -1,memo) + gridTraveller(n-1,m,memo)
  return memo[key];
}

gridTraveller(1,1)
gridTraveller(2,3)
gridTraveller(4,3)
gridTraveller(18,18)