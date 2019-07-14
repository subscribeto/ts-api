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
class S2API {
    static setNetworkImplementation(implementation) {
        S2API.apiRequestMethod = implementation;
    }
    static makeRequest(requestMethod, endpoint, body, token) {
        return __awaiter(this, void 0, void 0, function* () {
            if (S2API.apiRequestMethod !== undefined)
                return S2API.apiRequestMethod(requestMethod, endpoint, body, token);
            else {
                throw new Error("ERR | Attempted to use the sub.scribe.to API without providing an implementation for " +
                    "your environment. You're probably forgetting to use either @subscribeto/ts-api-browser or " +
                    "@subscribeto/ts-api-node. Check the documentation for your respective platform's package for a fix.");
            }
        });
    }
    static isJSON(content) {
        try {
            JSON.parse(content);
        }
        catch (e) {
            return false;
        }
        return true;
    }
}
S2API.BASE_URL = "http://api.scribe.to";
exports.S2API = S2API;
//# sourceMappingURL=s2-api.js.map