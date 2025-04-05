import cors, { CorsOptions } from 'cors';
import { ACCEPTED_ORIGIN } from '../../config/dotenv-config';

export const corsMiddleware = () => {
  const corsOptions: CorsOptions = {
    origin: (
      origin: string | undefined,
      callback: (err: Error | null, allow: boolean) => void
    ) => {
      // If origin is allowed or is missing
      if (ACCEPTED_ORIGIN === origin || !origin) {
        return callback(null, true);
      }

      // If origin is not allowed
      return callback(new Error('Not allowed by CORS.'), false);
    },
    credentials: true,
  };

  return cors(corsOptions);
};
