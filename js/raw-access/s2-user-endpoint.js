"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const s2_api_1 = require("../s2-api");
const s2_endpoint_1 = require("./s2-endpoint");
class S2UserEndpoint extends s2_endpoint_1.S2Endpoint {
    static getEndpointURL(append = "") {
        return super.getEndpointURL("/user") + append;
    }
}
exports.S2UserEndpoint = S2UserEndpoint;
class S2UserAuthenticationEndpoint extends S2UserEndpoint {
    static getEndpointURL(append = "") {
        return super.getEndpointURL("/auth") + append;
    }
}
exports.S2UserAuthenticationEndpoint = S2UserAuthenticationEndpoint;
class S2UserSignUpEndpoint extends S2UserAuthenticationEndpoint {
    static getEndpointURL(append = "") {
        return super.getEndpointURL("/sign-up") + append;
    }
    static signUp(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            return s2_api_1.S2API.makeRequest("POST", S2UserSignUpEndpoint.getEndpointURL("/"), { email, password });
        });
    }
    static finalize(token, code) {
        return s2_api_1.S2API.makeRequest("POST", S2UserSignUpEndpoint.getEndpointURL("/finalize"), { token, code });
    }
}
exports.S2UserSignUpEndpoint = S2UserSignUpEndpoint;
class S2UserSignInEndpoint extends S2UserAuthenticationEndpoint {
    static getEndpointURL(append = "") {
        return super.getEndpointURL("/sign-in") + append;
    }
}
exports.S2UserSignInEndpoint = S2UserSignInEndpoint;
//# sourceMappingURL=s2-user-endpoint.js.map