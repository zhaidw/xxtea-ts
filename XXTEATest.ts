/**********************************************************\
|                                                          |
| XXTEATest.ts                                            |
|                                                          |
| XXTEA encryption test code for TypeScript.               |
|                                                          |
| test Code by: zhaidw <zhaidw@jiucai.org>                 |
| LastModified: May 9, 2023                                |
|                                                          |
\**********************************************************/


import XXTEA from "./XXTEA";


console.time("test xxtea run time");
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


console.timeEnd("test xxtea run time");


let encoded: string = '';
let decoded: string = '';

encoded = Buffer.from(str,'utf-8').toString('base64');
console.log('typescript Buffer base64 encode: ', encoded);
decoded = Buffer.from(encoded,'base64').toString('utf-8');
console.log('typescript Buffer base64 decode: ', decoded);

encoded = btoa(XXTEA.toBinary(str));
console.log('typescript btoa encode: ', encoded);
decoded = XXTEA.fromBinary(atob(encoded));
console.log('typescript atob decode: ', decoded);