export declare const nested: (flatArray: any[], options?: {
    prop: string;
    parent: string;
    children: string;
}) => any[];
export declare const nestedAsync: (flatPromise: Promise<any[]>, options?: any) => Promise<any[]>;
