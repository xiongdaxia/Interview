原型与原型链
===========================

关键点
===========================
* prototype 每一个函数都有一个prototype
* __proto__ 每一个对象都有一个__proto__ 指向该对象的原型
* constructor 每一个原型都有一个constructor指向关联的构造函数
* 原型链的形成

prototype  
===========================
每一个函数都有一个prototype属性，这就是JS的精华**原型**

```js
function Father(){}
Father.prototype.name = 'xiongdaxia';
let father1 = new Father();
let father2 = new Father();
// 这里father1、father2就通过原型，拥有了Father构造函数上的属性name
console.log(father1.name);
console.log(father2.name);
```
这里需要注意，只有函数才有prototype属性，顾名思义它指向的就是这个构造函数的原型

\__proto__
===========================
每一个对象（null除外）都有一个属性，叫__proto__。这就是人们常说的隐式原型，它（\__proto__）指向的就是构造它的函数的原型（prototype）
```js
function Father(){}
let father = new Father();
console.log(Father.prototype === father.__proto__); // true
```

constructor
============================
每一个原型都有一个constructor属性，它指向的是关联它的构造函数
```js
function Father(){}
console.log(Father.prototype.constructor === Father) // true
```

原型链的形成
===========================
如果一个对象的原型上没有该属性和方法，它就会沿着该原型的__proto__一直寻找下去，形成一条原型链

用一张图展示整个过程
=============================
