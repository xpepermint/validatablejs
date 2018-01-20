export interface StringLengthOptions {
    bytes?: boolean;
    min?: number;
    minOrEqual?: number;
    max?: number;
    maxOrEqual?: number;
}
export declare function stringLength(value: any, recipe?: StringLengthOptions): boolean;
