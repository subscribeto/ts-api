import { S2APIResponse } from "./s2-api-response";
declare type HTTPMethod = "GET" | "POST" | "PUT" | "DELETE";
declare type APIRequestMethod = <R>(requestMethod: HTTPMethod, endpoint: string, body?: any, token?: string) => Promise<S2APIResponse<R>>;
export declare class S2API {
    static readonly BASE_URL: string;
    private static apiRequestMethod;
    protected static setNetworkImplementation(implementation: APIRequestMethod): void;
    static makeRequest<R>(requestMethod: HTTPMethod, endpoint: string, body?: any, token?: string): Promise<S2APIResponse<R>>;
    static isJSON(content: any): boolean;
}
export {};
