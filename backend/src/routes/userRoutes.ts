import { Router } from 'express';
import userController from '../controllers/userController';

export function setUserRoutes(app: Router) {
    app.post('/users', userController.createUser);
    app.get('/users/:id', userController.getUser);
    app.put('/users/:id', userController.updateUser);
    app.delete('/users/:id', userController.deleteUser);
    app.get('/users', userController.getAllUsers);
}

export default Router();