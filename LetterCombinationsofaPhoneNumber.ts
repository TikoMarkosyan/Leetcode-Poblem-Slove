/**
 *  17. Letter Combinations of a Phone Number
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = (digits) => {
    if (digits.length == 0) return [];

    const perDigits = digits.toString().split("");
    const obj = {
        2: "abc",
        3: "def",
        4: "ghi",
        5: "jkl",
        6: "mno",
        7: "pqrs",
        8: "tuv",
        9: "wxyz"
    }
    
    const arr:string[] = [];
    for (let i = 0; i < perDigits.length; i++) {
        arr[i] = obj[perDigits[i]]
    }

    return arr.reduce(
        (acc, str) =>
            acc.flatMap(prefix =>
                str.split("").map(symbol => prefix + symbol)
            ),
        [""]
    )
};

letterCombinations(23);