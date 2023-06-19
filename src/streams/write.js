import fs from 'fs';
import path from 'path';
import getDirname from '../getDirname.js';

const __dirname = getDirname(import.meta.url);

const file = path.join(__dirname, 'files', 'fileToWrite.txt');

const write = async () => {
    const writableStream = fs.createWriteStream(file);
    process.stdin.pipe(writableStream);
};

await write();