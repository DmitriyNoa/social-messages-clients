interface PaginationInfo {
    count: number;
    next: string | null;
    pages: number;
    prev: string | null;
}
export interface IHttpResponse<DataType> {
    info?: PaginationInfo;
    results: DataType;
}
