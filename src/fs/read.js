import path from 'path';
import fs from 'fs/promises';
import getDirname from '../getDirname.js';

const __dirname = getDirname(import.meta.url);

const file = path.join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
    try {
        const text = await fs.readFile(file, { encoding: 'utf8' });
        console.log(text);
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await read();