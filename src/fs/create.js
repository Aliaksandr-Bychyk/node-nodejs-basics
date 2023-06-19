import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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