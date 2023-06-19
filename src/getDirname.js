import path from 'path';
import { fileURLToPath } from 'url';

const getDirname = (url) => {
  return path.dirname(fileURLToPath(url));
} 

export default getDirname;