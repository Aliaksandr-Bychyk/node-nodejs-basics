import path from 'path';
import fs from 'fs/promises';
import getDirname from '../getDirname.js';

const __dirname = getDirname(import.meta.url);

const file = path.join(__dirname, 'files', 'fresh.txt');

const create = async () => {
    try {
        await fs.access(file);
        throw new Error('FS operation failed');
    } catch (err) {
        if (err.code === 'ENOENT') {
            await fs.writeFile(file, 'I am fresh and young');
        } else {
            throw err;
        }
    }
};

await create();