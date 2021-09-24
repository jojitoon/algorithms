function gridTraveller(n, m) {
  const table = Array(n + 1)
    .fill()
    .map(() => Array(m + 1).fill(0));

  table[1][1] = 1;

  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= m; j++) {
      const element = table[i][j];

      if (i + 1 <= n) table[i + 1][j] += element;
      if (j + 1 <= m) table[i][j + 1] += element;
    }
  }

  return table[n][m];
}

console.log(gridTraveller(1, 1));
console.log(gridTraveller(2, 3));
console.log(gridTraveller(4, 3));
console.log(gridTraveller(18, 18));
