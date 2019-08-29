// 快速排序
// 时间复杂度 nlogn 利用数学公式去遍历每一种情况求解可得
// 不稳定

// 思路 找一个比较值（一般是第一个），将比它大的数放右边，比它小的数放左边 ；然后递归处理左右两个新数组
// 过程中需要注意的点：1，记录下第一个标杆数、有几个比标准数小的数（用于回去）2，替换的时候替换的是小数的位置和前面的位置

function fast(arr, left, right) {
  if (left >= right) return arr;
  // 记录第一个被比较的数
  let first = arr[left];
  // 标记first应该回去的位置
  let index = left + 1;
  for (let i = left + 1; i <= right; i++) {
    if (first > arr[i]) {
      // 精髓之处：从left+1 开始替换
      exchange(arr, index, i);
      index++;
    }
  }
  // first回到分界处
  exchange(arr, left, index - 1);
  // 递归处理
  fast(arr, left, index - 2);
  fast(arr, index, right);
  return arr;
}
function exchange(arr, a, b) {
  let c = arr[a];
  arr[a] = arr[b];
  arr[b] = c;
}
