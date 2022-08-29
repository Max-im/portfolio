import appRoot from 'app-root-path';
import * as winston from 'winston';
import { getDate } from './loggerUtil';

const { createLogger, transports, config, format } = winston;
const { combine, timestamp, json, errors, printf } = format;

const logFormat = printf(({ level, message, timestamp, stack }) => {
  return `${timestamp} ${level}: ${stack || message}`;
});

export class LoggerOptions {
  static getProdLogger(component: string) {
    return createLogger({
      levels: config.syslog.levels,
      format: combine(
        timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        errors({ stack: true }),
        json()
      ),
      defaultMeta: { component },
      transports: [
        new transports.File({
          filename: `${appRoot}/logs/${getDate()}_${component}.log`,
        }),
      ],
    });
  }

  static getDevLogger(component: string) {
    return createLogger({
      levels: config.syslog.levels,
      format: combine(
        format.colorize(),
        timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        errors({ stack: true }),
        logFormat
      ),
      transports: [new transports.Console()],
    });
  }
  static getLogger(component: string) {
    if (process.env.NODE_ENV === 'development') return this.getDevLogger(component);
    if (process.env.NODE_ENV === 'test') return this.getDevLogger(component);
    return this.getProdLogger(component);
  }
}
