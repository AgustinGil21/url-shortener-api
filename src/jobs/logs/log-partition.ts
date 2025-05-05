import { pgPool } from '../../db/pg-db';
import LoggerHandler from '../../shared/utils/LoggerHandler';

export const logPartitionJob = async (days: number) => {
  const service = 'log-partition';

  try {
    await pgPool.query('SELECT create_log_partition($1)', [days]);
    LoggerHandler.create(service).info('Log partition created.');
  } catch (err) {
    LoggerHandler.create(service).error('Error creating log partition.');
  }
};
