"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setUserRoutes = void 0;
const express_1 = require("express");
const userController_1 = __importDefault(require("../controllers/userController"));
const router = (0, express_1.Router)();
const userController = new userController_1.default();
function setUserRoutes(app) {
    app.post('/users', userController.createUser);
    app.get('/users/:id', userController.getUser);
    app.put('/users/:id', userController.updateUser);
    app.get('/users', userController.getAllUsers);
}
exports.setUserRoutes = setUserRoutes;
exports.default = router;
