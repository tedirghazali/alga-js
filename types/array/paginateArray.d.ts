export function paginate(fromArr: any, pageActive?: number, limitPerPage?: number): any[];
export function pages(fromArr: any, limitPerPage?: number): number;
export function pageInfo(fromArr: any, pageActive?: number, limitPerPage?: number): {
    from: number;
    to: number;
    of: number;
};
export function pagination(totalPages: any, pageActive?: number, positionOfEllipsis?: number): number[];
