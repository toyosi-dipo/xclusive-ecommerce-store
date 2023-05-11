export function arrayOfArrays(array, itemsPerGroup) {
  let parentArray = [];
  for (let i = 0; i < array.length + 1; i += itemsPerGroup) {
    parentArray.push(array.slice(i, i + itemsPerGroup));
  }
  return parentArray;
}
