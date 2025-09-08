/**
 * 17. Letter Combinations of a Phone Number
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = (digits: string): string[] => {
  if (digits.length === 0) return [];

  // Map from digit to its possible letters
  const digitToLetters: Record<string, string> = {
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9": "wxyz",
  };


  const lettersForEachDigit: string[] = digits.split("").map(
    (digit) => digitToLetters[digit]
  );

  return lettersForEachDigit.reduce<string[]>(
    (combinationsSoFar, currentLetters) =>
      combinationsSoFar.flatMap((prefix) =>
        currentLetters.split("").map((letter) => prefix + letter)
      ),
    [""]
  );
};

console.log(letterCombinations("23"));