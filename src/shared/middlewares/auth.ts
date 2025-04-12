import jwt, { JsonWebTokenError } from 'jsonwebtoken';
import { SECRETKEY } from '../../config/dotenv-config';
import { Response, NextFunction } from 'express';
import { IRequest, IUserRequest } from '../types/interfaces';

export const authRequired = (
  req: IRequest,
  res: Response,
  next: NextFunction
) => {
  const { access_token } = req.cookies;

  if (!access_token)
    return res.status(401).json({ message: 'User not logged!' });

  jwt.verify(
    access_token,
    SECRETKEY as string,
    (err: JsonWebTokenError | null, decoded: any) => {
      if (err || !decoded)
        return res.status(401).json({ message: 'Invalid access token!' });

      req.user = decoded as IUserRequest;

      next();
    }
  );
};

export const isAuthenticated = (
  req: IRequest,
  res: Response,
  next: NextFunction
) => {
  const { access_token } = req.cookies;

  if (!access_token) {
    req.isAuth = false;
    return next();
  }

  jwt.verify(
    access_token,
    SECRETKEY as string,
    (err: JsonWebTokenError | null, decoded: any) => {
      if (err || !decoded) {
        return res.status(401).json({ message: 'Invalid access token!' });
      }

      req.isAuth = true;
      req.user = decoded as IUserRequest;

      next();
    }
  );
};
