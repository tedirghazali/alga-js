export function paginate(fromArr: any, pageActive?: number, pageLimit?: number): any[];
export function pages(fromArr: any, pageLimit?: number): number;
export function pageInfo(fromArr: any, pageActive?: number, pageLimit?: number): {
    from: number;
    to: number;
    of: number;
};
export function pagination(allPages: any, pageActive?: number, pageLimit?: number): number[];
