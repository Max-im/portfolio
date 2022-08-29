import * as winston from 'winston';
import { LoggerOptions } from './LoggerOptions';

export class Logger {
  private winstonLogger: winston.Logger;

  constructor(component: string) {
    this.winstonLogger = LoggerOptions.getLogger(component);
  }

  log(message: string): void {
    this.winstonLogger.info(message);
  }
  warn(message: string): void {
    this.winstonLogger.warn(message);
  }
  error(message: string): void {
    this.winstonLogger.error(message);
  }
}
