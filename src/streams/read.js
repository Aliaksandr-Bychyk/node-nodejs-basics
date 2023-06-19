import fs from 'fs'
import path from 'path';
import getDirname from '../getDirname.js';

const __dirname = getDirname(import.meta.url);

const file = path.join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
    const readableStream = fs.createReadStream(file, 'utf-8');
    readableStream.on('data', (chunk) => {
        process.stdout.write(chunk);
    });
};

await read();