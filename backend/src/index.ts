import express from 'express';
import { connectDB } from './utils/db';
import { setUserRoutes } from './routes/userRoutes';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
connectDB();

// health route for quick browser check
app.get('/', (_req, res) => {
    res.send('User Management API is running');
});

setUserRoutes(app);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});