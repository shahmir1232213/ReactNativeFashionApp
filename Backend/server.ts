import express from 'express';
import cors from 'cors';
import  jwt from 'jsonwebtoken';
import { logInController } from './controllers/logInController.ts';
import { isLogggedIn } from './middlewares/isLoggedIn.ts';
import { displayController } from './controllers/displayController.ts';

const app = express();

app.use(cors({
    origin:'*',
    credentials:true
}));

app.use(express.json());

app.post('/login', logInController);
app.get('/protected',isLogggedIn, displayController);

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
})