# XXTEA 加密算法的 TypeScript 实现

## 简介

XXTEA 是一个快速安全的加密算法。本项目是 XXTEA 加密算法的 TypeScript 实现。

它不同于原始的 XXTEA 加密算法。它是针对字符串类型数据进行加密的，而不是针对 uint32 数组。同样，密钥也是字符串类型。

## 使用

```html
import XXTEA from "./XXTEA";

let str: string = "Hello World! 你好，中国🇨🇳！";
let key: string = "1234567890";
console.log("test str: " + str);

let encrypt_data: any = XXTEA.encryptToBase64(str, key);
//encryptToBase64: afecHTbSuY20uCrBxOb+joLzYPkIXQ7pF/YT7AmpYRI6ns4O
console.log("encryptToBase64: " + encrypt_data);

let decrypt_data: any = XXTEA.decryptFromBase64(encrypt_data, key);
console.log("decryptFromBase64: " + decrypt_data);
console.log("decryptFromBase64 success: " + (str === decrypt_data));

encrypt_data = XXTEA.encrypt(str, key);
console.log("encrypt to binary: " + encrypt_data);
decrypt_data = XXTEA.decrypt(encrypt_data, key);
console.log("decrypt from binary: " + decrypt_data);
console.log("decrypt from binary success: " + (str === decrypt_data));
```
