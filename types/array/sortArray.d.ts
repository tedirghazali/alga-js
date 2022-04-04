interface CallBack<Type> {
    (a: Type, b: Type): number;
}
export declare const sort: (fromArray: any[], sortString?: string) => any[];
export declare const sortBy: (fromArray: any[], propString: string, sortString?: string) => any[];
export declare const sortWith: (fromArray: any[], compareFunc: CallBack<any>) => any[];
export {};
