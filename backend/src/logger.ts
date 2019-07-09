import winston = require('winston');

import { config } from './config';

const baseFormat = config.environment === 'production' ? winston.format.json() : winston.format.simple();

const errorStackFormat = winston.format(info => {
    if (info instanceof Error) {
        return Object.assign({}, info, { message: info.stack });
    }
    return info;
});

const format = winston.format.combine(winston.format.splat(), errorStackFormat(), baseFormat);

export const logger = winston.createLogger({
    level: 'info',
    format,
    transports: [new winston.transports.Console()],
});
