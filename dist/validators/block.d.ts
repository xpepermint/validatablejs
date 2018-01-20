export interface BlockOptions {
    block?: () => boolean | Promise<boolean>;
}
export declare function block(value: any, options?: BlockOptions): boolean;
