export declare const flatten: (nestArray: any[], options?: {
    prop: string;
    parent: string;
    children: string;
}) => any[];
export declare const flattenAsync: (nestPromise: Promise<any[]>, options?: any) => Promise<any[]>;
