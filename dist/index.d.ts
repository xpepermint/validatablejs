export declare type ValidatorBlock = (value: any, recipe: any) => boolean | Promise<boolean>;
export interface RecipeObject {
    name: string;
    message: string | (() => string);
    [key: string]: any;
}
export declare class ValidatorError extends Error {
    value: any;
    recipe: RecipeObject;
    code: number;
    constructor(value?: any, recipe?: RecipeObject, code?: number);
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
    createValidatorError(value: any, recipe: RecipeObject): ValidatorError;
    validate(value: any, recipes?: RecipeObject[]): Promise<any[]>;
}
