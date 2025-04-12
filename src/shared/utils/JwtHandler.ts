import jwt from 'jsonwebtoken';
import { SECRETKEY, NODE_ENV } from '../../config/dotenv-config';
import { Response, CookieOptions } from 'express';
import { TGenericObject, TUUID } from '../types/interfaces';

const cookieOptions: CookieOptions = {
  httpOnly: true,
  sameSite: 'lax',
  maxAge: 1000 * 60 * 60 * 24 * 30,
  secure: NODE_ENV === 'production',
};

export default class JwtHandler {
  static async create(payload: TGenericObject) {
    return new Promise((resolve, reject) => {
      jwt.sign(
        payload,
        SECRETKEY as string,
        {
          expiresIn: '30d',
        },
        (err, token) => {
          if (err) reject('Token cannot be created!');
          resolve(token);
        }
      );
    });
  }

  static async registerJwtCookie(res: Response, id: TUUID) {
    const accessToken = await this.create({
      id,
    });

    res
      .status(200)
      .cookie('access_token', accessToken, cookieOptions)
      .json({ message: 'User successfully created!' });
  }
}
