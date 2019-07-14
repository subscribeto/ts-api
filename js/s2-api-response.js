"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const s2_api_1=require("./s2-api");class S2APIResponse{constructor(s,e){this.response=s,this.statusCode=e}getBody(){return s2_api_1.S2API.isJSON(this.response)?JSON.parse(this.response):this.response}getStatusCode(){return this.statusCode}}exports.S2APIResponse=S2APIResponse;
//# sourceMappingURL=s2-api-response.js.map
