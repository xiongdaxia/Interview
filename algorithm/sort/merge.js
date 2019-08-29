// 归并排序 速度仅次与快排

// 思路：先将数拆分，再合并

// 时间复杂度
let aTestArr = [2, 3, 1, 4, 6, 8, 1, 9];

function mergeSort(arr) {
  let len = arr.length;
  if (len < 2) return arr;
  let middle = Math.floor(len / 2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right) {
  let result = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  if (left.length) result = result.concat(left);
  if (right.length) result = result.concat(right);
  return result;
}

console.log(mergeSort(aTestArr));
