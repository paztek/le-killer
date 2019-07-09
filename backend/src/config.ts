import { config as dotenv } from 'dotenv';
import { resolve } from 'path';

dotenv({ path: resolve(__dirname, '../.env.example') });

export enum Environment {
    Development = 'development',
    Production = 'production',
    Test = 'test',
}

export interface Config {
    environment: Environment;
    port: number;
}

export const config: Config = {
    environment: <Environment>process.env.NODE_ENV,
    port: parseInt(process.env.PORT),
};
