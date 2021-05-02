export function insert(...value: any[]): (toArr: any, toPosition?: any, atIndex?: any) => Insert;
export function insertBefore(...value: any[]): (toArr: any, atIndex: any) => any;
export function insertAfter(...value: any[]): (toArr: any, atIndex: any) => any;
declare class Insert {
    constructor(valArr: any, toArr: any);
    valArr: any;
    toArr: any;
    first(): any[];
    last(): any[];
    before(index: any): any;
    after(index: any): any;
}
export {};
