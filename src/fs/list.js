import path from 'path';
import fs from 'fs/promises';
import getDirname from '../getDirname.js';

const __dirname = getDirname(import.meta.url);

const folder = path.join(__dirname, 'files');

const list = async () => {
    try {
        const files = await fs.readdir(folder);
        for (const file of files) {
            console.log(file);
        }
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await list();