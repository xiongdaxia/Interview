// 基数排序：分为从低位到高位排序 、 从高位到低位排序

// 思路就是将数字按照位数去排序，再利用桶排序的规则

function radix(arr) {
  // 声明10个空桶
  let buckets = Array.apply(null, new Array(10)).map(item => {
    return (item = []);
  });
  // 计算出需要遍历的最大位数
  let maxIndex = 0;
  arr.forEach(item => {
    if (item.toString().trim().length > maxIndex) {
      maxIndex = item.toString().trim().length;
    }
  });
  //按位遍历
  for (let j = 1; j <= maxIndex; j++) {
    for (let i = 0; i < arr.length; i++) {
      // 将数字转化为字符串
      let current = arr[i].toString().trim();
      // 取得个位的数字
      let index = Number(current[current.length - j]) || 0;
      buckets[index].push(arr[i]);
    }
    // 生成新数组
    arr = buckets.reduce((pre, cur) => {
      return pre.concat(cur);
    });
    // 还原桶
    buckets = Array.apply(null, new Array(10)).map(item => {
      return (item = []);
    });
  }

  return arr;
  // 十位遍历
}
console.log(radix([22, 11, 33, 44, 1, 4, 3]));
