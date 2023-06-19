import fs from 'fs'
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const file = path.join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
    const readableStream = fs.createReadStream(file, 'utf-8');
    readableStream.on('data', (chunk) => {
        process.stdout.write(chunk);
    });
};

await read();