import { getDB, writeDB } from '../utils/db';

type User = {
    id: string;
    name: string;
    surname: string;
    dateOfBirth: string;
    sport: string;
    tShirtSize: string;
    createdAt?: string;
    updatedAt?: string;
};

const UserModel = {
    async create(data: Partial<User>): Promise<User> {
        const db = getDB();
        const id = Date.now().toString();
        const now = new Date().toISOString();
                const tshirt = (data as any).tShirtSize || (data as any).tshirtSize || '';
                const user: User = {
            id,
            name: data.name || '',
            surname: data.surname || '',
            dateOfBirth: data.dateOfBirth || '',
            sport: data.sport || '',
            tShirtSize: tshirt,
            tshirtSize: tshirt,
            createdAt: now,
            updatedAt: now,
        };
        db.users.push(user);
        await writeDB();
        return user;
    },

    async findById(id: string): Promise<User | null> {
        const db = getDB();
        const user = db.users.find((u: any) => u.id === id);
        return user || null;
    },

    async findByIdAndUpdate(id: string, data: Partial<User>): Promise<User | null> {
        const db = getDB();
        const user = db.users.find((u: any) => u.id === id);
        if (!user) return null;
        Object.assign(user, data);
        const tshirt = (data as any).tShirtSize || (data as any).tshirtSize;
        if (tshirt !== undefined) {
            user.tShirtSize = tshirt;
            (user as any).tshirtSize = tshirt;
        }
        user.updatedAt = new Date().toISOString();
        await writeDB();
        return user;
    },

    async find(): Promise<User[]> {
        const db = getDB();
        return db.users;
    },

    async findByIdAndDelete(id: string): Promise<User | null> {
        const db = getDB();
        const idx = db.users.findIndex((u: any) => u.id === id);
        if (idx === -1) return null;
        const [deleted] = db.users.splice(idx, 1);
        await writeDB();
        return deleted || null;
    },
};

export default UserModel;