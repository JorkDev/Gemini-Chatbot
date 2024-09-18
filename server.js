import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { GoogleGenerativeAI } from '@google/generative-ai';
import App from './src/App.js';

dotenv.config();

const PORT = 8000;
const app = express();

app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEN_AI_KEY);

app.post('/gemini', async (req, res) => {
  console.log(req.body.history);
  console.log(req.body.message);
  res.send("Received your request");
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
