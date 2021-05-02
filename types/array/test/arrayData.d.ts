declare namespace _default {
    export { firstArrayData as first };
    export { secondArrayData as second };
    export { thirdArrayData as third };
}
export default _default;
declare const firstArrayData: {
    id: number;
    name: string;
    position: string;
    office: string;
    extension: string;
    startdate: string;
    salary: number;
}[];
declare const secondArrayData: ({
    id: number;
    name: string;
    position: string;
    office: string;
    extension: string;
    startdate: string;
    salary: number;
} | {
    id: number;
    name: string;
    position: string;
    office: string;
    extension: number;
    startdate: string;
    salary: number;
})[];
declare const thirdArrayData: {
    id: number;
    name: string;
    position: string;
    office: string;
    extension: number;
    startdate: string;
    salary: number;
}[];
