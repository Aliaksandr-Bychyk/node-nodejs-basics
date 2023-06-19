import path from 'path';
import fs from 'fs/promises';
import getDirname from '../getDirname.js';

const __dirname = getDirname(import.meta.url);

const startFolder = path.join(__dirname, 'files');
const endFolder = path.join(__dirname, 'copy-files');

const copy = async () => {
    try {
        await fs.access(startFolder);
        try {
            await fs.access(endFolder);
            throw new Error('FS operation failed');
        } catch (err) {
            if (err.code === 'ENOENT') {
                fs.cp(startFolder, endFolder, { recursive: true });
            } else {
                throw err;
            }
        }
    } catch (err) {
        if (err.code === 'ENOENT') {
            throw new Error('FS operation failed');
        } else {
            throw err;
        }
    }
};

await copy();
