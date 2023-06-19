import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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