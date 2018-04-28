import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class XyzErrorHandlerService extends ErrorHandler {

    constructor() {
        super();
    }

    handleError(error) {
        let date = new Date();
        
        console.error('Something went wrong. Check Below!!!', {
            timestamp: date.toISOString(),
            message: error.message,
            zone: error.zone,
            task: error.task
        });
    }
}