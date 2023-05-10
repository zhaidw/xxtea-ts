# XXTEA 加密算法的 TypeScript 实现

## 简介

XXTEA 是一个快速安全的加密算法。本项目是 XXTEA 加密算法的 TypeScript 实现。

它不同于原始的 XXTEA 加密算法。它是针对字符串类型数据进行加密的，而不是针对 uint32 数组。同样，密钥也是字符串类型。

## 准备运行环境

从官网 https://nodejs.org/en/download 安装 LTS Version: 18.16.0 (includes npm 9.5.1)

如果使用zip包，则安装完成后，比如安装路径是 D:\app\node-18.16.0 则需要把路径加入环境变量 PATH 中

设置完成后，新开cmd窗口，执行如下命令：

```shell
npm install -g typescript
tsc -v

```
如果输出 Version 5.0.4 , 表示 TypeScript 环境安装好了。

运行命令请参考 test.cmd


## 使用

```typescript

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
