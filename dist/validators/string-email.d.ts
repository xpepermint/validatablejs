export interface Options {
    allowDisplayName?: boolean;
    allowUtf8LocalPart?: boolean;
    requireTld?: boolean;
}
export declare function stringEmail(value: any, recipe?: Options): boolean;
