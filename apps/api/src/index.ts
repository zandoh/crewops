import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT ?? 4000;

app.use(cors({
  origin: process.env.FRONTEND_URL ?? 'http://localhost:3000',
}));
app.use(express.json());

app.get('/api/health', (_req: Request, res: Response) => {
  res.json({ status: 'API is running!' });
});

app.listen(port, () => {
  console.log(`API listening on port ${port}`);
});