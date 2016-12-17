export interface Options {
    block?: () => boolean | Promise<boolean>;
}
export declare function block(value: any, options?: Options): boolean;
