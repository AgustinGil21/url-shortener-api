import { Request } from 'express';

export type TUUID = `${string}-${string}-${string}-${string}-${string}`;
export type TEmailAddress = `${string}@${string}`;
export type TDate = number | Date | string;
export type TAccountType = 'free' | 'pro' | 'premium';
export type TGenericObject = Record<string, any>;

export interface IUserRequest {
  id: TUUID;
}

export interface IRequest extends Request {
  user?: IUserRequest;
  isAuth?: boolean;
}

interface IGeoData {
  country: string;
  region: string;
  city: string;
  isp: string;
  lat: number;
  lon: number;
}

interface INameAndVersion {
  name?: string;
  version?: string;
}

interface IDeviceObject {
  type?:
    | 'mobile'
    | 'tablet'
    | 'console'
    | 'smarttv'
    | 'wearable'
    | 'xr'
    | 'embedded';
  vendor?: string;
  model?: string;
}

interface IDevice {
  browser?: INameAndVersion;
  os?: INameAndVersion;
  device?: IDeviceObject;
}

export interface IUserMetrics {
  userAgent?: string | undefined;
  referer?: string | undefined;
  duration?: number;
  ip?: string;
  timestamp?: TDate;
  language?: string;
  geo?: GeoData;
  device?: IDevice;
}
