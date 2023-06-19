import fs from 'fs'
import path from 'path';
import zlib from 'zlib';
import getDirname from '../getDirname.js';

const __dirname = getDirname(import.meta.url);

const file = path.join(__dirname, 'files', 'fileToCompress1.txt');
const archive = path.join(__dirname, 'files', 'archive.gz');

const decompress = async () => {
    const gzip = zlib.createUnzip();
    const readableStream = fs.createReadStream(archive);
    const writableStream = fs.createWriteStream(file);
    readableStream.pipe(gzip).pipe(writableStream); 
};

await decompress();