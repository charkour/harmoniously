// https://stackoverflow.com/a/39838385/9931154
const flatMap = (f: Function, xs: any[]) => xs.reduce((acc: any, x: any) => acc.concat(f(x)), []);

/// https://stackoverflow.com/a/60677733/9931154
const flat = (arr: any[]) => {
  return [].concat.apply([], arr);
};

// https://stackoverflow.com/a/43053803/9931154
export const cartesian = <K, T extends Array<any>>(...a: T): K =>
  a.reduce((a, b) => flatMap((d: T) => b.map((e: T) => flat([d, e])), a));
