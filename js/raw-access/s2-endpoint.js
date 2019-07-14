"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const s2_api_1 = require("../s2-api");
class S2Endpoint {
    static getEndpointURL(append = "") {
        return s2_api_1.S2API.BASE_URL + append;
    }
}
exports.S2Endpoint = S2Endpoint;
//# sourceMappingURL=s2-endpoint.js.map