"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const s2_api_1 = require("./s2-api");
class S2APIResponse {
    constructor(response, statusCode) {
        this.response = response;
        this.statusCode = statusCode;
    }
    getBody() {
        if (s2_api_1.S2API.isJSON(this.response))
            return JSON.parse(this.response);
        else
            return this.response;
    }
    getStatusCode() {
        return this.statusCode;
    }
}
exports.S2APIResponse = S2APIResponse;
//# sourceMappingURL=s2-api-response.js.map