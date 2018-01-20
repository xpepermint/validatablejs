export interface ArrayLengthOptions {
    min?: number;
    minOrEqual?: number;
    max?: number;
    maxOrEqual?: number;
}
export declare function arrayLength(value: any, options?: ArrayLengthOptions): boolean;
