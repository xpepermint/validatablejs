export interface Options {
    requireTld?: boolean;
    allowUnderscores?: boolean;
    allowTrailingDot?: boolean;
}
export declare function stringFQDN(value: any, options?: Options): boolean;
