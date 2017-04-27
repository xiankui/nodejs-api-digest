/**
 * 数组的buffer流实现了iterator的迭代性
 * for ... of
 * buf.values()
 * buf.keys()
 * buf.entries()
 */

var buf = Buffer.from([1, 2, 3])

console.log(buf)


/** 
 * 1
 * 2
 * 3
 */
for (const b of buf) {
  console.log(b);
}