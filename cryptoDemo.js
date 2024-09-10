//provides crypto graphic functionality

import crypto from 'crypto';

// createHash()
// const hash = crypto.createHash('sha256');
// hash.update('password1234');
// console.log(hash.digest('hex'));

// randomBytes() can be used for user ids
// const randomBytes = crypto.randomBytes(16, (err, buf) => {
//   if (err) {
//     console.error(err);
//   }
//   console.log(buf.toString('hex'));
// });

// encryption and decryption of data through keys
// createCipheriv & createDecipheriv
const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);
const cipher = crypto.createCipheriv(algorithm, key, iv);
let encrypted = cipher.update('Encrypted message', 'utf8', 'hex');
encrypted += cipher.final('hex');
console.log(encrypted);
// decryption
const decipher = crypto.createDecipheriv(algorithm, key, iv);
let decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');
console.log(decrypted);
