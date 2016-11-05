export declare function block(v: any, d: {
    block(v: any, d: any): boolean | Promise<boolean>;
    [key: string]: any;
}): Function | Promise<boolean>;
