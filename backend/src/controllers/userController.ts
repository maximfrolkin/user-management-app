import { Request, Response } from 'express';
import UserModel from '../models/userModel';

class UserController {
    async createUser(req: Request, res: Response) {
        try {
            const user = await UserModel.create(req.body);
            res.status(201).json(user);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async getUser(req: Request, res: Response) {
        try {
            const user = await UserModel.findById(req.params.id);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.json(user);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async updateUser(req: Request, res: Response) {
        try {
            const user = await UserModel.findByIdAndUpdate(req.params.id, req.body);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.json(user);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async deleteUser(req: Request, res: Response) {
        try {
            const user = await UserModel.findByIdAndDelete(req.params.id);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.json({ message: 'User deleted' });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async getAllUsers(req: Request, res: Response) {
        try {
            const users = await UserModel.find();
            res.json(users);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}

export default new UserController();