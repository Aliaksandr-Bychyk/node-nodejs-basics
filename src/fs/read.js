import path from 'path';
import {fileURLToPath} from 'url';
import fs from 'fs/promises'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const file = path.join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
    try {
        const text = await fs.readFile(file, { encoding: 'utf8' });
        console.log(text)
    } catch (err) {
        throw new Error('FS operation failed')
    }
};

await read();