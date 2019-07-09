import { NextFunction, Request, Response } from 'express';

import { logger } from './logger';
import { config, Environment } from './config';
import { HttpError, InternalServerHttpError, NotFoundHttpError } from './http/errors';
import express = require('express');

const app = express();
const port = config.port;

app.get('/', (req: Request, res: Response) => {
    res.json({ message: 'Hello, world!' });
});

// Start the Express server
app.listen(port, () => {
    logger.info(`Server started at http://localhost:${port}`);
});

// Catch 404 and forward to error handler
app.use((req: Request, res: Response) => {
    throw new NotFoundHttpError(`Path "${req.originalUrl}" not found`);
});

// Error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    logger.error(err);

    if (res.headersSent) {
        return next(err);
    }

    const httpError = err instanceof HttpError ? err : new InternalServerHttpError(err.message);

    const data = {
        status: httpError.status,
        message: httpError.message,
        stack: config.environment === Environment.Production ? void 0 : err.stack,
    };

    res.json(data);
});
