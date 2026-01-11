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
exports.writeDB = exports.getDB = exports.connectDB = void 0;
const lowdb_1 = require("lowdb");
const node_1 = require("lowdb/node");
const path_1 = require("path");
const file = (0, path_1.join)(__dirname, '..', '..', 'data', 'db.json');
const adapter = new node_1.JSONFile(file);
const low = new lowdb_1.Low(adapter);
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield low.read();
        low.data || (low.data = { users: [] });
        console.log('lowdb ready at', file);
    }
    catch (error) {
        console.error('lowdb initialization failed:', error);
        process.exit(1);
    }
});
exports.connectDB = connectDB;
const getDB = () => {
    if (!low.data)
        low.data = { users: [] };
    return low.data;
};
exports.getDB = getDB;
const writeDB = () => __awaiter(void 0, void 0, void 0, function* () {
    yield low.write();
});
exports.writeDB = writeDB;
