export declare type ValidatorBlock = (value: any, recipe: any) => boolean | Promise<boolean>;
export interface RecipeObject {
    validator: string;
    message: string | (() => string);
    [key: string]: any;
}
export interface ValidatorError {
    validator: string;
    message: string;
    code: number;
}
export declare class Validator {
    firstErrorOnly: boolean;
    validators: {
        [validator: string]: ValidatorBlock;
    };
    context: any;
    constructor({firstErrorOnly, validators, context}?: {
        firstErrorOnly?: boolean;
        validators?: {
            [name: string]: ValidatorBlock;
        };
        context?: any;
    });
    protected _createValidatorError(recipe: RecipeObject): ValidatorError;
    protected _createString(template: any, data: any): string;
    validate(value: any, recipes?: RecipeObject[]): Promise<ValidatorError[]>;
}
