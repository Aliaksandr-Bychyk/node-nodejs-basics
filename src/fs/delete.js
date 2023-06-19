import path from 'path';
import {fileURLToPath} from 'url';
import fs from 'fs/promises'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const file = path.join(__dirname, 'files', 'fileToRemove.txt');

const remove = async () => {
    try {
        await fs.access(file)
    } catch (err) {
        if (err.code === 'ENOENT') {
            throw new Error('FS operation failed')
        }
    }
    await fs.unlink(file)
};

await remove();