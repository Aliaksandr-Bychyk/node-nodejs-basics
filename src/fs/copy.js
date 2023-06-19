import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
