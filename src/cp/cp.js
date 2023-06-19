import cp from 'child_process';
import path from 'path';
import getDirname from '../getDirname.js';

const __dirname = getDirname(import.meta.url);

const script = path.join(__dirname, 'files', 'script.js');

const spawnChildProcess = async (args) => {
    const child = cp.spawn('node', [script, ...args]);

    process.stdin.pipe(child.stdin);
    child.stdout.pipe(process.stdout);
};

spawnChildProcess(['someArgument1', 'someArgument2']);
