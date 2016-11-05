export interface Validation {
    name: string;
    message: string | (() => string);
    [option: string]: any;
}
export declare class ValidationError extends Error {
    validation: Validation;
    value: any;
    code: number;
    constructor(validation: Validation, value: any, code?: number);
}
export declare class Validator {
    firstErrorOnly: boolean;
    validationError: typeof ValidationError;
    validators: {
        [validator: string]: (value: any, options: any) => boolean | Promise<boolean>;
    };
    context: any;
    constructor({firstErrorOnly, validationError, validators, context}?: {
        firstErrorOnly?: boolean;
        validationError?: typeof ValidationError;
        validators?: any;
        context?: any;
    });
    validate(value: any, validations: Validation[]): Promise<any[]>;
}
