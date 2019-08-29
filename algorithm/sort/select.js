// 选择排序
// 思路：遍历一遍数组，找到最小的值的index然后记录下，交换位置
// 时间复杂度 n^2 稳定
let aTestArr = [2, 3, 1, 4, 6, 8, 1, 9];

function select(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    // 记录最小的值和最小的index
    let min = arr[i];
    let minIndex = i;
    for (let j = i; j < len; j++) {
      if (min > arr[j]) {
        min = arr[j];
        minIndex = j;
      }
    }
    exchange(arr, i, minIndex);
  }
  return arr;
}

function exchange(arr, a, b) {
  let c = arr[a];
  arr[a] = arr[b];
  arr[b] = c;
}

console.log(select(aTestArr));
