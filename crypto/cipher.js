/**
 * 可逆的加解密算法
 * 又可分为对称算法和非对称算法
 * 对称算法使用同样的key加解密, 如 aes192
 * 非对称算法使用公私钥加解密
 */

const crypto = require('crypto')

// 算法列表
// console.log(crypto.getCiphers());

const context = 'this is a secret context !';

var _context;

/**
 * 对称算法
 */
const passkey = 'passkey';
const cipher_key = crypto.createCipher('aes192', passkey)

_context = cipher_key.update(context, 'utf8', 'hex')
_context += cipher_key.final('hex')

console.log(`context cipher with key ${_context}`)


const decipher_key = crypto.createDecipher('aes192', passkey)

let _d = decipher_key.update(_context, 'hex', 'utf8')
_d += decipher_key.final('utf8')

console.log(`decipher _context with same key ${_d}`)