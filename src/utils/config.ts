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

export const JWT_SECRET: string = process.env.JWT_SECRET;
export const GOOGLE_CLIENT_ID: string = process.env.GOOGLE_CLIENT_ID;
export const GOOGLE_CLIENT_SECRET: string = process.env.JWT_SECRET;
