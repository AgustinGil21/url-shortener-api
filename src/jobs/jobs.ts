import cron from 'node-cron';
import { logPartitionJob } from './logs/log-partition';

// Each month
cron.schedule('0 0 1 * *', async () => {
  await logPartitionJob(30);
});
