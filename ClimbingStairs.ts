// 70. Climbing Stairs

const climbStairsSolution = (n: number): number => {
  if (n <= 3) return n;
  const dp = [0, 1, 2];
  for (let i = 3; i <= n + 1; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
};

climbStairsSolution(40);
