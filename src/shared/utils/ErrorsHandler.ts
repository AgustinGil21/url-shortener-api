import { Response } from 'express';
import { ZodSchema } from 'zod';
import ResponseErrors from './ResponseErrors';

interface IResponseErrors {
  res: Response;
  err: string;
  status: number;
}

interface IZod {
  schema: ZodSchema;
  data: unknown;
  res: Response;
}

export default class ErrorsHandler {
  static response({ res, status, err }: IResponseErrors) {
    if (err && res && status) {
      return res.status(status).json({ message: err });
    }

    const { status: errStatus, message } = ResponseErrors.internal();
    return res.status(errStatus).json({ message: message });
  }

  static async zod({ schema, data, res }: IZod): Promise<Response | void> {
    try {
      const result = schema.safeParse(data);

      if (!result.success) {
        return res.status(400).json({ issues: result.error.issues });
      }
    } catch (error) {
      const { status, message } = ResponseErrors.internal();
      return res.status(status).json({ message: message });
    }
  }
}
