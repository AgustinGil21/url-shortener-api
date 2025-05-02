import express, { json } from 'express';
import { corsMiddleware } from './shared/middlewares/cors';
import { PORT } from './config/dotenv-config';
import cookieParser from 'cookie-parser';
import Url from './shared/utils/Url';

const app = express();
app.disable('x-powered-by');
app.use(json());
app.use(corsMiddleware());
app.use(cookieParser());

console.log(Url.getProtocol('https://localhost3000'));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
