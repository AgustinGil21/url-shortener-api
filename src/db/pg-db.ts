// infrastructure/db/pg/db.ts
import { Pool } from 'pg';
import {
  PG_DB,
  PG_HOST,
  PG_PASSWORD,
  PG_PORT,
  PG_USER,
} from '../config/dotenv-config';

export const pgPool = new Pool({
  user: PG_USER,
  host: PG_HOST,
  database: PG_DB,
  password: PG_PASSWORD,
  port: Number(PG_PORT),
});
