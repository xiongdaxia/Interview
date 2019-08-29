// 桶排序
// 确定最大值和最小值，输入桶的个数将数组划分到不同的桶里，然后插入排序

// 输入桶排序的数组和桶的个数
function bucket(arr, n) {
  // 找到最大最小值
  let max = Math.max.apply(null, arr);
  let min = Math.min.apply(null, arr);
  let len = arr.length;
  // 每个桶的容量
  let capycity = (max - min + 1) / n;
  // 声明n个桶
  let buckets = new Array(n);
  // 遍历整个原始数组，先确定它位于第几个桶，然后再插入其中
  for (let i = 0; i < len; i++) {
    // 记录放在第几个桶里
    let index = Math.floor((arr[i] - min) / capycity);
    // 初始化桶
    if (!buckets[index]) buckets[index] = [];
    // 如果桶为空，第一个数填入进去
    if (buckets[index].length === 0) {
      buckets[index].push(arr[i]);
      continue;
    }

    // 采用插入排序插入
    for (let j = 0; j < buckets[index].length; j++) {
      // 如果当前插入的值比桶里的值小，将其插入前面
      if (arr[i] < buckets[index][j]) {
        buckets[index].splice(j, 0, arr[i]);
        break;
      }
      // 如果当前插入的值是最后一个值，且比最后一个值大，插入到最后面
      if (j === buckets[index].length - 1 && arr[i] > buckets[index][j]) {
        buckets[index].push(arr[i]);
        break;
      }
    }
  }
  // 使用reduce连接所有数组
  arr = buckets.reduce((acc, cur, index, arr) => {
    return acc.concat(cur);
  });
  return arr;
}
console.log(bucket([2, 1, 4, 1, 3, 6, 7], 3));
