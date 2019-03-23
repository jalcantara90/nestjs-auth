import * as dotenv from 'dotenv';

let path: string;
switch (process.env.NODE_ENV) {
  case 'prod':
    path = `${__dirname}/../../.env`;
    break;
  default:
    path = `${__dirname}/../../.env.development`;
    break;
}

dotenv.config({ path });

// PORT
export const PORT: string = process.env.PORT;

// JWT
export const JWT_SECRET: string = process.env.JWT_SECRET;

// Auth with google
export const GOOGLE_CLIENT_ID: string = process.env.GOOGLE_CLIENT_ID;
export const GOOGLE_CLIENT_SECRET: string = process.env.JWT_SECRET;

// Mongo connection
export const MONGO_URI: string = process.env.MONGO_URI;
