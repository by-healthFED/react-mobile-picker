export function findIndex(list, fn) {
  for (let index = 0; index < list.length; index++) {
    if (fn(list[index])) {
      return index;
    }
  }
  return -1;
}
