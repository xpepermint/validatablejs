export interface NumberSizeOptions {
    min?: number;
    minOrEqual?: number;
    max?: number;
    maxOrEqual?: number;
}
export declare function numberSize(value: any, options?: NumberSizeOptions): boolean;
