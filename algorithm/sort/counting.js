// 计数排序

// 空间换取时间的排序算法
// 思路：识别算法最大值和最小值，声明一个长度为max-min+1初始值为0的数组，该数组存放每一个数出现的次数
// 计数排序的理解和实现 https://blog.csdn.net/liyuming0000/article/details/46913357
let aTestArr = [2, 3, 1, 4, 6, 8, 1, 9];

// 只能识别整数，不能识别有小数的比较
function counting(arr) {
  // 数组必须是整数
  let min = Math.min.apply(null, arr);
  let max = Math.max.apply(null, arr);
  let len = arr.length;
  let sortIndex = 0;
  // 声明一个计数的数组
  // 初始化数组
  // https://segmentfault.com/a/1190000007651029
  let countingArr = new Array(max - min + 1).fill(0);
  // 遍历一遍加一
  for (let i = 0; i < len; i++) {
    countingArr[arr[i] - min]++;
  }
  // 遍历一边counting数组，完成排序
  for (let j = 0; j < countingArr.length; j++) {
    while (countingArr[j] > 0) {
      arr[sortIndex] = j + min;
      sortIndex++;
      countingArr[j]--;
    }
  }
  return arr;
}
console.log(counting(aTestArr));
