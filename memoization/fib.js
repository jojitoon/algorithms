const fib = (n, memo={}) => {
  if(!n) return 0;
  if (n in memo) return memo[n];
  if(n<=2) return 1;  
  memo[n] = fib(n -1, memo) + fib(n-2,memo)
  return memo[n];
}

fib(1000)