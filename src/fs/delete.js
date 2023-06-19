import path from 'path';
import fs from 'fs/promises';
import getDirname from '../getDirname.js';

const __dirname = getDirname(import.meta.url);

const file = path.join(__dirname, 'files', 'fileToRemove.txt');

const remove = async () => {
    try {
        await fs.access(file);
    } catch (err) {
        if (err.code === 'ENOENT') {
            throw new Error('FS operation failed');
        }
    }
    await fs.unlink(file);
};

await remove();