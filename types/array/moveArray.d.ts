export function move(...indexes: any[]): (fromArr: any, toIndex: any, removeCount?: number) => any[];
export function switched(...fromIndex: any[]): (fromArr: any, ...withIndex: any[]) => any[];
export function transfer(...indexes: any[]): (fromArr: any, toArr: any, byIndex?: any) => {
    from: any[];
    to: any[];
};
