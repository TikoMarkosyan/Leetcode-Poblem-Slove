/**
 3. Longest Substring Without Repeating Characters
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringSolution = (s:string): number => {
  let res = 0,
      l = 0;
  const set = new Set();

  for (let r = 0; r < s.length; r++) {
    while (set.has(s[r])) {
      set.delete(s[l]);
      l++;
    }
    set.add(s[r]);
    res = Math.max(res, r - l + 1);
  }

  return res;
};

console.log(lengthOfLongestSubstringSolution("sdfdsjkfhhqkfw"));