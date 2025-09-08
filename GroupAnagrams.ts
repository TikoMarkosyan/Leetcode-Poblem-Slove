/**
 * @param {string[]} strs
 * @return {string[][]}
 */

const groupAnagrams = (strs) => {
  if (strs.length === 0) return [[strs[0]]];

  const anagramGroups = new Map();
  for (let i = 0; i < strs.length; i++) {
    const sortedKey = strs[i].split("").sort().join("");
    if (!anagramGroups.has(sortedKey)) {
      anagramGroups.set(sortedKey, []);
    }

    anagramGroups.get(sortedKey).push(strs[i]);
  }

  return Array.from(anagramGroups.values());
};

groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
