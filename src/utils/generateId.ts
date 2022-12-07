// uses closure to increment id on each call
export function generateId(prefix: string) {
  let i = 0;
  return function () {
    return prefix + i++;
  };
}
