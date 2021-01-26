/**
 * @param  {(d:T)=>any} f
 * @param  {any[]} xs
 *
 * Returns a new array formed by applying a given callback function to each
 *   element of the array, and then flattening the result by one level - MDN
 * Ref: https://stackoverflow.com/a/39838385/9931154
 */
const flatMap = <T>(f: (d: T) => any, xs: any[]) => {
  return xs.reduce((acc: any, x: any) => {
    return acc.concat(f(x));
  }, []);
};

/**
 * @param  {T[]} arr
 *
 * Creates a new array with all sub-array elements concatenated into it - MDN
 * Ref: https://stackoverflow.com/a/60677733/9931154
 */
const flat = <T>(arr: T[]) => {
  return Array.prototype.concat.apply([], arr);
};

/**
 * @param  {T} arrays
 * @returns T
 *
 * Returns the cartesian product of the arrays.
 * Ref: https://stackoverflow.com/a/43053803/9931154
 */
export const cartesian = <T extends Array<any>>(arrays: T): T => {
  return arrays.reduce((prevValue, currentValue) => {
    return flatMap((d: T) => {
      return currentValue.map((e: T) => {
        return flat([d, e]);
      });
    }, prevValue);
  });
};
