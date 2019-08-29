// 冒泡排序
// 时间复杂度 n + (n-1) + (n-2)....1 = n(n+1)/2     结果是 n^2
// 稳定

// 思路：每一次遍历数组，将最大的数放在最后面

let aTestArr = [2, 3, 1, 4, 6, 8, 1, 9];

function bubble(arr) {
  // 记录数组的长度
  let len = arr.length;
  // 第一层全部循环
  for (let i = 0; i < len; i++) {
    // 第二层，只循环比较不是最大的数
    for (let j = 0; j < len - i; j++) {
      if (j !== len - i - 1 && arr[j] > arr[j + 1]) exchange(arr, j, j + 1);
    }
  }
  return arr;
}
console.log(bubble(aTestArr));

// 交换两个数的位置
function exchange(arr, a, b) {
  let c = arr[a];
  arr[a] = arr[b];
  arr[b] = c;
}
