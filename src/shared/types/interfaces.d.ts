import { Request } from 'express';

export type TUUID = `${string}-${string}-${string}-${string}-${string}`;
export type TEmailAddress = `${string}@${string}`;
export type TDate = number | Date | string;
export type TAccountType = 'free' | 'pro' | 'premium';
export type TGenericObject = Record<string, any>;
export type TImageFormat = 'jpeg' | 'png' | 'webp' | 'avif';

export interface IUserRequest {
  id: TUUID;
}

export interface IRequest extends Request {
  user?: IUserRequest;
  isAuth?: boolean;
}
