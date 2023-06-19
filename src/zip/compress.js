import fs from 'fs'
import path from 'path';
import zlib from 'zlib';
import getDirname from '../getDirname.js';

const __dirname = getDirname(import.meta.url);

const file = path.join(__dirname, 'files', 'fileToCompress.txt');
const archive = path.join(__dirname, 'files', 'archive.gz');

const compress = async () => {
    const gzip = zlib.createGzip();
    const readableStream = fs.createReadStream(file);
    const writableStream = fs.createWriteStream(archive);
    readableStream.pipe(gzip).pipe(writableStream); 
};

await compress();