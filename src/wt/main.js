import os from 'os';
import path from 'path';
import { fileURLToPath } from 'url';
import { Worker } from 'worker_threads';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const workerFile = path.join(__dirname, 'worker.js');

const performCalculations = async () => {
    const cores = os.cpus().length;
    const results = [];

    for (let i = 0; i < cores; i++) {
        const worker = new Worker(workerFile, { workerData: i + 10 });

        const output = () => {
            if (results.length === cores && !results.includes()) {
                console.log(results);
            }
        }
    
        worker.on('message', (result) => {
            results[i] = { status: 'resolved', data: result };
            output();
        });
    
        worker.on('error', (error) => {
            results[i] = { status: 'error', data: null };
            output();
        });
    }
};

await performCalculations();