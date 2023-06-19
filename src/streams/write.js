import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const file = path.join(__dirname, 'files', 'fileToWrite.txt');

const write = async () => {
    const writableStream = fs.createWriteStream(file);
    process.stdin.pipe(writableStream);
};

await write();