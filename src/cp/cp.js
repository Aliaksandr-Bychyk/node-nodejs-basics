import cp from 'child_process';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const script = path.join(__dirname, 'files', 'script.js');

const spawnChildProcess = async (args) => {
    const child = cp.spawn('node', [script, ...args]);

    process.stdin.pipe(child.stdin);
    child.stdout.pipe(process.stdout);
};

spawnChildProcess(['someArgument1', 'someArgument2']);
