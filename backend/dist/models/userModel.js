"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../utils/db");
const UserModel = {
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = (0, db_1.getDB)();
            const id = Date.now().toString();
            const now = new Date().toISOString();
            const user = {
                id,
                name: data.name || '',
                surname: data.surname || '',
                dateOfBirth: data.dateOfBirth || '',
                sport: data.sport || '',
                tShirtSize: data.tShirtSize || '',
                createdAt: now,
                updatedAt: now,
            };
            db.users.push(user);
            yield (0, db_1.writeDB)();
            return user;
        });
    },
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = (0, db_1.getDB)();
            const user = db.users.find((u) => u.id === id);
            return user || null;
        });
    },
    findByIdAndUpdate(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = (0, db_1.getDB)();
            const user = db.users.find((u) => u.id === id);
            if (!user)
                return null;
            Object.assign(user, data);
            user.updatedAt = new Date().toISOString();
            yield (0, db_1.writeDB)();
            return user;
        });
    },
    find() {
        return __awaiter(this, void 0, void 0, function* () {
            const db = (0, db_1.getDB)();
            return db.users;
        });
    },
};
exports.default = UserModel;
