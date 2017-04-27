/**
 * HMAC是密钥相关的哈希运算消息认证码（Hash-based Message Authentication Code）
 * 典型的哈希算法包括 ‘md5′,’sha’,’sha1′,’sha256′,’sha512′,’RSA-SHA’。
 * 常见使用场景：对密码使用key加密，防止彩虹表破解纯hash加密
 */
const crypto = require('crypto')

const key = 'encryptokey'
const hmac = crypto.createHmac('sha256', key)

var _pw = 'mypassword';

var pw;

pw = hmac.update(_pw)
pw = hmac.digest('hex')

console.log(`hmac crypto _pw ${pw}`)

// 这样存储更安全一些
// {
//   username: 'xxxx'
//   password: 'aead69a72da77d0615a854dda1086d885807574a',
//   passkey:'abc'
// }