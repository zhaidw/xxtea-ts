# XXTEA for TypeScript


## Introduction

XXTEA is a fast and secure encryption algorithm. This is a XXTEA library for TypeScript.

It is different from the original XXTEA encryption algorithm. It encrypts and decrypts String instead of uint32 Array, and the key is also String.


## Prepare TypeScript Env

install Latest LTS Version: 18.16.0 (includes npm 9.5.1) from https://nodejs.org/en/download
then:

```shell
npm install -g typescript
tsc -v

```
if result Version 5.0.4 , then env is ok.



## Usage

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
