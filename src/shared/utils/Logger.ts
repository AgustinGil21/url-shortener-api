import winston from 'winston';

const { combine, timestamp, json } = winston.format;

const logger = winston.createLogger({
  level: 'info',
  format: combine(timestamp(), json()),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'warn.log', level: 'warn' }),
    new winston.transports.File({ filename: 'http.log', level: 'http' }),
    new winston.transports.File({ filename: 'verbose.log', level: 'verbose' }),
    new winston.transports.File({ filename: 'debug.log', level: 'debug' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

logger.add(
  new winston.transports.Console({
    format: winston.format.simple(),
  })
);

export default class Logger {
  static create(service: string) {
    return {
      info: (message: string) => {
        logger.info('info', { message, service });
      },
      error: (message: string) => {
        logger.error('error', { message, service });
      },
      warn: (message: string) => {
        logger.warn('warn', { message, service });
      },
      debug: (message: string) => {
        logger.warn('debug', { message, service });
      },
      http: (message: string) => {
        logger.warn('http', { message, service });
      },
      verbose: (message: string) => {
        logger.warn('verbose', { message, service });
      },
    };
  }
}

// Usage method: Logger.create('service-name').info('message')
