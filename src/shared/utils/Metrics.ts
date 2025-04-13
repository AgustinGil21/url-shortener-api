import { IUserMetrics } from '../types/interfaces';
import { Request } from 'express';
import ResponseErrors from './ResponseErrors';
import { UAParser } from 'ua-parser-js';

export default class Metrics {
  private metrics: IUserMetrics;
  private req: Request;
  private ip: string | undefined;

  constructor(req: Request) {
    this.req = req;
    this.metrics = {};
    this.ip = req.ip;
  }

  public setDuration(duration: number) {
    this.metrics.duration = duration;
  }

  public async getRequestMetrics() {
    const userAgent = this.req.get('User-Agent') || '';
    const { browser, os, device } = UAParser(userAgent);

    this.metrics.ip = this.ip;
    this.metrics.referer = this.req.get('Referrer');
    this.metrics.userAgent = this.req.get('User-Agent');
    this.metrics.timestamp = new Date().toISOString();
    this.metrics.language = this.req.get('Accept-Language');

    this.metrics.device = {
      browser: {
        name: browser.name,
        version: browser.version,
      },
      os,
      device,
    };
  }

  public async getGeoData() {
    const res = await fetch(`http://ip-api.com/json/${this.ip}`);
    const data = await res.json();

    if (!res.ok) {
      const { message } = ResponseErrors.internal();
      throw new Error(message);
    }

    this.metrics.geo = {
      country: data.country,
      region: data.regionName,
      city: data.city,
      isp: data.isp,
      lat: data.lat,
      lon: data.lon,
    };
  }
}

// Usage method: Metrics(userIp).getRequestMetrics().getGeoData() => userMetrics
// setDuration() its just for the response duration tracking
