/**
 746. Min Cost Climbing Stairs
 * @param {number[]} cost
 * @return {number}
 */

const minCostClimbingStairsSolution = (cost) => {
  const dp = [cost[0], cost[1]];
  for (let i = 2; i < cost.length; i++) {
    dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i];
  }
  return Math.min(dp[dp.length - 1], dp[dp.length - 2]);
};

console.log(minCostClimbingStairsSolution([1, 2, 33, 4, 6]));
