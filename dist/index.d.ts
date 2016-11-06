export declare type ValidatorBlock = (value: any, recipe: any) => boolean | Promise<boolean>;
export interface RecipeObject {
    validator: string;
    message: string | (() => string);
    [key: string]: any;
}
export declare class ValidatorError extends Error {
    validator: string;
    message: string;
    code: number;
    constructor(validator?: string, message?: string, code?: number);
}
export declare class Validator {
    firstErrorOnly: boolean;
    validators: {
        [validator: string]: (value: any, validation: any) => boolean | Promise<boolean>;
    };
    context: any;
    constructor({firstErrorOnly, validators, context}?: {
        firstErrorOnly?: boolean;
        validators?: {
            [name: string]: ValidatorBlock;
        };
        context?: any;
    });
    protected _createValidatorError(value: any, recipe: RecipeObject): ValidatorError;
    protected _createString(template: any, data: any): string;
    validate(value: any, recipes?: RecipeObject[]): Promise<any[]>;
}
