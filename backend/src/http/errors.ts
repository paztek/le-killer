import HttpStatusCode from './codes';

export class HttpError extends Error {
    constructor(public status: number, message: string) {
        super(message);
    }
}

export class NotFoundHttpError extends HttpError {
    constructor(message: string) {
        super(HttpStatusCode.NOT_FOUND, message);
    }
}

export class InternalServerHttpError extends HttpError {
    constructor(message: string) {
        super(HttpStatusCode.INTERNAL_SERVER_ERROR, message);
    }
}
