import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const startFile = path.join(__dirname, 'files', 'wrongFilename.txt');
const endFile = path.join(__dirname, 'files', 'properFilename.md');

const rename = async () => {
    try {
        await fs.access(startFile);
        try {
            await fs.access(endFile);
            throw new Error('FS operation failed');
        } catch (err) {
            if (err.code === 'ENOENT') {
                fs.rename(startFile, endFile);
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

await rename();