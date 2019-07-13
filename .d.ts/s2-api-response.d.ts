export declare class S2APIResponse<R> {
    private readonly rawXHR;
    private isVerified;
    constructor(response: XMLHttpRequest, lazyInitialization?: boolean);
    verify(): boolean;
    getBody(): R;
    getStatusCode(): number;
    getRawXHR(): XMLHttpRequest;
}
