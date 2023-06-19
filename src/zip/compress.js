import fs from 'fs'
import path from 'path';
import zlib from 'zlib';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const file = path.join(__dirname, 'files', 'fileToCompress.txt');
const archive = path.join(__dirname, 'files', 'archive.gz');

const compress = async () => {
    const gzip = zlib.createGzip();
    const readableStream = fs.createReadStream(file);
    const writableStream = fs.createWriteStream(archive);
    readableStream.pipe(gzip).pipe(writableStream); 
};

await compress();