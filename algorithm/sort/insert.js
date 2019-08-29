// 插入排序
// 时间复杂度 n^2
// 稳定 s（很多排序API，当排序数量低于8个的时候，选择的是插入排序，大于8个是快速排序）

// 思路：像扑克排序一样(注意：splice的用法)
let aTestArr = [2, 3, 1, 4, 2323, 6, 8, 2323, 1, 9];

function insert(arr) {
  let len = arr.length;
  // 从第二个数开始插入
  for (let i = 1; i < len; i++) {
    // 循环比较然后插入
    for (let j = 0; j < i; j++) {
      let insertItem = arr[i];
      // 如果是第一个数
      if (j === 0 && insertItem <= arr[0]) {
        arr.splice(i, 1);
        arr.unshift(insertItem);
        break;
      }
      // 如果是后面的数
      if (insertItem >= arr[j] && insertItem <= arr[j + 1]) {
        arr.splice(i, 1);
        // 插在j+1前面
        arr.splice(j + 1, 0, insertItem);
        break;
      }
    }
  }
  return arr;
}
console.log(insert(aTestArr));
