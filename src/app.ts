import express, { json } from 'express';
import { corsMiddleware } from './shared/middlewares/cors';
import { PORT } from './config/dotenv-config';
import cookieParser from 'cookie-parser';
import LoggerHandler from './shared/utils/LoggerHandler';
import './jobs/jobs';

const app = express();
app.disable('x-powered-by');
app.use(json());
app.use(corsMiddleware());
app.use(cookieParser());

app.listen(PORT, () => {
  LoggerHandler.create('api-main').info(`Server running on port ${PORT}`);
  console.log(`Server running on port ${PORT}`);
});
