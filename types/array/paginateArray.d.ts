export function paginate(oriArr: any): (pageNum: any, showNum: any) => any[];
export function pages(oriArr: any, showNum: any): number;
export function show(oriArr: any): (pageNum: any, showNum: any) => {
    from: number;
    to: number;
    of: number;
};
export function pagination(allPages: any, pageActive?: number, pageLimit?: number): number[];
