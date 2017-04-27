const assert = require('assert');

/**
 * assert.deepStrictEqual(actual, expected[, message])
 * @params actual <any>
 * @params expected <any>
 * @params message <any>
 * @result 
 *     deepEqual
 *     原始值使用全等运算符（===）比较
 *     对象的比较包括检查它们的原型是否全等
 */
assert.deepEqual({a: 1}, {a: '1'})  // pass
assert.deepStrictEqual({a: 1}, {a: '1'})  // throw Error