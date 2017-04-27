const assert = require('assert')

/**
 * assert.deepEqual(actual, expected[, message])
 * @params actual <any>
 * @params expected <any>
 * @params message <any>
 * @result 测试 actual 参数与 expected 参数是否深度相等。 原始值使用相等运算符（==）比较。
 * 				 只比较可枚举的自身属性。
 */
const obj1 = {
  a : {
    b : 1
  }
};
const obj2 = {
  a : {
    b : 2
  }
};
const obj3 = {
  a : {
    b : 1
  }
};
const obj4 = Object.create(obj1);

assert.deepEqual(obj1, obj3)  // pass
assert.deepEqual(obj1, obj2)  // throw Error
assert.deepEqual(obj1, obj4)  // throw Error  {a: {b: 1}}  deepEqual {}