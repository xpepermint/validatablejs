export declare type ValidatorBlock = (value: any, recipe: any) => boolean | Promise<boolean>;
export interface RecipeObject {
    name: string;
    message: string | (() => string);
    [key: string]: any;
}
export declare class ValidationError extends Error {
    recipe: RecipeObject;
    value: any;
    code: number;
    constructor(recipe: RecipeObject, value?: any, code?: number);
}
export declare class Validator {
    firstErrorOnly: boolean;
    validationError: typeof ValidationError;
    validators: {
        [validator: string]: (value: any, validation: any) => boolean | Promise<boolean>;
    };
    context: any;
    constructor({firstErrorOnly, validationError, validators, context}?: {
        firstErrorOnly?: boolean;
        validationError?: typeof ValidationError;
        validators?: {
            [name: string]: ValidatorBlock;
        };
        context?: any;
    });
    validate(value: any, recipes?: RecipeObject[]): Promise<any[]>;
}
