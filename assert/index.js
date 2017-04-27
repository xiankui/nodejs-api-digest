const assert = require('assert');

/**
 * assert 模块提供了一组简单的断言测试集合，可被用于测试不变量。
 */

/**
 * assert.ok(value[, message])
 * assert(value[, message]) 简写形式
 * @params value <any>
 * @params message <any> 
 * @result 断言是否为真值
 */
assert(1)  // pass
assert(0)  // throw Error AssertionError: 0 == true
