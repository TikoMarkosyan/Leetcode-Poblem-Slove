/**
 7. Reverse Integer
 * @param {number} x
 * @return {number}
 */

const reverseInteger = (x:number): number => {
  const INT_MIN = -Math.pow(2, 31);
  const INT_MAX = Math.pow(2, 31) - 1;

  const res = x.toString().split("").reverse();
  if (res.includes("-")) {
    const last = res.pop();
    res.unshift(last!);
  }

  const result = +res.join("");
  if (result < INT_MIN || result > INT_MAX) {
    return 0;
  }

  return result;
};

console.log(reverseInteger(23414124));
