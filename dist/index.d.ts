export interface ValidatorRecipe {
    validator: string;
    message: string;
    condition?: () => boolean | Promise<boolean>;
    [key: string]: any;
}
export declare class Validator {
    firstErrorOnly: boolean;
    validators: any;
    context: any;
    constructor({firstErrorOnly, validators, context}?: {
        firstErrorOnly?: boolean;
        validators?: any;
        context?: any;
    });
    _createValidatorError(recipe: ValidatorRecipe): {
        validator: string;
        message: any;
        code: any;
    };
    _createString(template: any, data: any): any;
    validate(value: any, recipes?: ValidatorRecipe[]): Promise<any[]>;
}
