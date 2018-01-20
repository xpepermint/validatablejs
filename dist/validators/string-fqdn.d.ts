export interface StringFQDNOptions {
    requireTld?: boolean;
    allowUnderscores?: boolean;
    allowTrailingDot?: boolean;
}
export declare function stringFQDN(value: any, options?: StringFQDNOptions): boolean;
