import { S2APIResponse } from "../s2-api-response";
import { S2TokenResponseStructure } from "../interfaces/s2-token-response-structure";
import { S2Endpoint } from "./s2-endpoint";
export declare class S2UserEndpoint extends S2Endpoint {
    static getEndpointURL(append?: string): string;
}
export declare class S2UserAuthenticationEndpoint extends S2UserEndpoint {
    static getEndpointURL(append?: string): string;
}
export declare class S2UserSignUpEndpoint extends S2UserAuthenticationEndpoint {
    static getEndpointURL(append?: string): string;
    static signUp(email: string, password: string): Promise<S2APIResponse<S2TokenResponseStructure>>;
    static finalize(token: string, code: string): Promise<S2APIResponse<S2TokenResponseStructure>>;
}
export declare class S2UserSignInEndpoint extends S2UserAuthenticationEndpoint {
    static getEndpointURL(append?: string): string;
}
