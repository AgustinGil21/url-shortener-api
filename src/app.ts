import express, { json } from 'express';
import { corsMiddleware } from './interfaces/middlewares/cors';
import { PORT } from './config/dotenv-config';
import cookieParser from 'cookie-parser';

const app = express();
app.disable('x-powered-by');
app.use(json());
app.use(corsMiddleware());
app.use(cookieParser());

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
