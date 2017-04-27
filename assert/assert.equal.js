const assert = require('assert')

/**
 * assert.equal(actual, expected[, message])
 * @params actual <any>
 * @params expected <any>
 * @params message <any>
 * @result 使用相等运算符（==）测试 actual 参数与 expected 参数是否相等。
 */
assert.equal(1, '1')
assert.equal({}, {})  // throw Error AssertionError: {} == {}