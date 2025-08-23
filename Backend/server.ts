import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors({
    origin:'*',
    credentials:true
}));

app.use(express.json());

app.get('/', (req, res) => {
   console.log('Received GET request at /');
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
})