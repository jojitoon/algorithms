/*
 test justification with dyanmic programming
 subproblems: suffixes words[i:]
 - #subproblems: n
 guess: where to start the second line
 - #choices <= n - i = O(n)
 recurrence: DP(i)
 = min(DP(j) + badness(i, j))
       for j in range(i+1, n+1):
 O(n) = time/subproblem
 DP(n) = 0
 topological order: i = n, n-1, .... K
 total time: O(n^2)
 original problem: DP(K)
 remember which guess was best

 */
