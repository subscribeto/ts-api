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
const typit_1 = require("typit");
const s2_user_endpoint_1 = require("../raw-access/s2-user-endpoint");
const s2_typit_token_response_structure_1 = require("./typit-types/s2-typit-token-response-structure");
describe("/user - User related methods.", () => {
    describe("/auth - User authentication methods.", () => {
        describe("/sign-up - User sign-up methods.", () => {
            test("/ - Sign-up a new user.", () => __awaiter(this, void 0, void 0, function* () {
                let response = yield s2_user_endpoint_1.S2UserSignUpEndpoint.signUp("trevorsears.main@gmail.com", "password");
                let typeChecker = new typit_1.ObjectType(new s2_typit_token_response_structure_1.S2TypitTokenResponseStructure());
                expect(typeChecker.exhaustivelyCheckConformity(response)).toBeTruthy();
            }));
            test("/finalize - Finalize user sign-up process.", () => __awaiter(this, void 0, void 0, function* () {
                fail("Test has not yet been written.");
            }));
        });
        describe("/sign-in - User sign-up methods.", () => {
            test("/ - Sign-in to a given user account.", () => __awaiter(this, void 0, void 0, function* () {
                fail("Test has not yet been written.");
            }));
            test("/totp - Verify user sign-in via TOTP.", () => __awaiter(this, void 0, void 0, function* () {
                fail("Test has not yet been written.");
            }));
            test("/sms - Verify user sign-in via SMS.", () => __awaiter(this, void 0, void 0, function* () {
                fail("Test has not yet been written.");
            }));
        });
    });
    describe("/me - 'Self' user accessor methods.", () => {
    });
});
//# sourceMappingURL=raw-access.test.js.map