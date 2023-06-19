import path from 'path';
import {fileURLToPath} from 'url';
import crypto from 'crypto';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const file = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');

const calculateHash = async () => {
    const hash = crypto.createHash('sha256');
    hash.update(file);
    console.log(hash.digest('hex'))
};

await calculateHash();