// 字符串选出出现最多的数字或者字母

let str = 'asdfghjklaqwertyuiopiaia';
function strMax(a) {
  let str = [...a];
  let object = {};
  let max = 0;
  let maxChar = '';
  str.forEach(item => {
    object[item] = object[item] === undefined ? 1 : object[item] + 1;
    if (object[item] > max) {
      maxChar = item;
      max = object[item];
    }
  });
  return maxChar;
}

// 数组去重
let arr = ['1', '2', '3', '1', 'a', 'b', 'b'];

function unique(arr) {
  let obj;
  arr.forEach(item => {
    obj[item] = 0;
  });
  return Object.keys(obj);
}
arr = [{ a: 1 }, { b: 2 }, { a: 1 }];
function unique2(arr) {
  let obj = {};
  arr.forEach(item => {
    for (let key in item) {
      obj[key] = item[key];
    }
  });
  return Object.keys(obj).map(item => ({
    [item]: obj[item]
  }));
}

// rudece数组去重
function uniqueUseReduce(arr) {
  let hash = {};
  return arr.reduce((item, next) => {
    hash[next] ? '' : (hash[next] = 1 && item.push(next));
    return item;
  }, []);
}
