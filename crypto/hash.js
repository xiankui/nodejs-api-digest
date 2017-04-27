/**
 * 哈希算法，
 * 是指将任意长度的二进制值映射为较短的固定长度的二进制值，这个小的二进制值称为哈希值
 * 具有不可逆性
 * 典型的哈希算法包括 ‘md5′,’sha’,’sha1′,’sha256′,’sha512′,’RSA-SHA’。
 * 常见使用场景：登录密码
 */
const crypto = require('crypto')
const hash = crypto.createHash('sha256')

// 支持的hash算法
// console.log(crypto.getHashes())

var _pw = 'mypassword';


var pw;
// if _pw is string, encoding as 'utf8', 'ascii' or 'latin1', default utf8
// if _pw is Buffer, encoding is ignored
pw = hash.update(_pw, 'utf8')

// 'hex', 'latin1' or 'base64', default is Buffer
pw = hash.digest('hex')

// or
// pw = hash.update(_pw).digest('hex')

console.log(`sha256 crypto _pw ${pw}`)