import path from 'path';
import crypto from 'crypto';
import getDirname from '../getDirname.js';

const __dirname = getDirname(import.meta.url);

const file = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');

const calculateHash = async () => {
    const hash = crypto.createHash('sha256');
    hash.update(file);
    console.log(hash.digest('hex'));
};

await calculateHash();