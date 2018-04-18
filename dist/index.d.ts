export interface ValidatorRecipe {
    validator: string;
    message?: string | (() => string);
    code?: number;
    condition?: () => boolean | Promise<boolean>;
    [key: string]: any;
}
export interface ValidatorError {
    validator: string;
    message: string;
    code: number;
}
export declare class Validator {
    failFast: boolean;
    validators: {
        [name: string]: () => boolean | Promise<boolean>;
    };
    context: any;
    constructor({failFast, validators, context}?: {
        failFast?: boolean;
        validators?: {
            [name: string]: () => boolean | Promise<boolean>;
        };
        context?: any;
    });
    _createValidatorError(recipe: ValidatorRecipe): ValidatorError;
    _createString(template: string, data: any): string;
    validate(value: any, recipes?: ValidatorRecipe[]): Promise<ValidatorError[]>;
}
