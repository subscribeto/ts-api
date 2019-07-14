export declare class S2APIResponse<R> {
    private readonly response;
    private readonly statusCode;
    constructor(response: R, statusCode: number);
    getBody(): R;
    getStatusCode(): number;
}
