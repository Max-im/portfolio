import { Request, Response, NextFunction } from 'express';
import { ApiError } from './errors';
import { Logger } from '../logger';

const logger = new Logger('common');

export const errorHandle = (err: any, req: Request, res: Response, next: NextFunction) => {
  logger.error(err.message);
  if (err instanceof ApiError) {
    return res.status(err.status).json({message: err.message})
  }
  return res.status(500).json({message: err.message})
};
