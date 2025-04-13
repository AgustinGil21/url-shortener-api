import jwt, { JsonWebTokenError } from 'jsonwebtoken';
import { SECRETKEY } from '../../config/dotenv-config';
import { Response, NextFunction } from 'express';
import { IRequest, IUserRequest } from '../types/interfaces';
import ResponseErrors from '../utils/ResponseErrors';

// When auth is required
export const authRequired = (
  req: IRequest,
  res: Response,
  next: NextFunction
) => {
  const { access_token } = req.cookies;

  if (!access_token) {
    const { status, message } = ResponseErrors.notLogged();
    return res.status(status).json({ message });
  }

  // Check if jsonwebtoken is valid
  jwt.verify(
    access_token,
    SECRETKEY as string,
    (err: JsonWebTokenError | null, decoded: any) => {
      if (err || !decoded) {
        const { status, message } = ResponseErrors.invalid('access token');
        return res.status(status).json({ message });
      }

      req.user = decoded as IUserRequest;

      next();
    }
  );
};

// When auth is optional
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

  // Check if jsonwebtoken is valid
  jwt.verify(
    access_token,
    SECRETKEY as string,
    (err: JsonWebTokenError | null, decoded: any) => {
      if (err || !decoded) {
        const { status, message } = ResponseErrors.invalid('access token');
        return res.status(status).json({ message });
      }

      req.isAuth = true;
      req.user = decoded as IUserRequest;

      next();
    }
  );
};
