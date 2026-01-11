import { join } from 'path';
import { promises as fs } from 'fs';

type Data = {
    users: Array<Record<string, any>>;
};

const file = join(__dirname, '..', '..', 'data', 'db.json');
let inMemory: Data | null = null;

export const connectDB = async () => {
    try {
        const content = await fs.readFile(file, 'utf8').catch(() => '{"users":[]}');
        inMemory = JSON.parse(content) as Data;
        inMemory ||= { users: [] };
        console.log('file DB ready at', file);
    } catch (error) {
        console.error('file DB initialization failed:', error);
        process.exit(1);
    }
};

export const getDB = () => {
    if (!inMemory) inMemory = { users: [] };
    return inMemory;
};

export const writeDB = async () => {
    if (!inMemory) return;
    await fs.mkdir(join(__dirname, '..', '..', 'data'), { recursive: true });
    await fs.writeFile(file, JSON.stringify(inMemory, null, 2), 'utf8');
};