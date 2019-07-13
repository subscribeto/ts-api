/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	4:49 PM -- July 12th, 2019.
 *	Project: @subscribeto/ts-api
 */

import { ObjectType } from "typit";
import { S2UserSignUpEndpoint } from "../raw-access/s2-user-endpoint";
import { S2APIResponse } from "../s2-api-response";
import { S2TokenResponseStructure } from "../interfaces/s2-token-response-structure";
import { S2TypitTokenResponseStructure } from "./typit-types/s2-typit-token-response-structure";

/**
 * Tests for the various user endpoint accessor methods.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */

describe("/user - User related methods.", () => {
	
	describe("/auth - User authentication methods.", () => {
		
		describe("/sign-up - User sign-up methods.", () => {
			
			test("/ - Sign-up a new user.", async (): Promise<void> => {
				
				let response: S2APIResponse<S2TokenResponseStructure> =
					await S2UserSignUpEndpoint.signUp("trevorsears.main@gmail.com", "password");
				
				let typeChecker: ObjectType = new ObjectType(new S2TypitTokenResponseStructure())
				
				expect(typeChecker.exhaustivelyCheckConformity(response)).toBeTruthy();
				
			});
			
			test("/finalize - Finalize user sign-up process.", async (): Promise<void> => {
				
				fail("Test has not yet been written.");
				
			});
			
		});
		
		describe("/sign-in - User sign-up methods.", () => {
			
			test("/ - Sign-in to a given user account.", async (): Promise<void> => {
				
				fail("Test has not yet been written.");
				
			});
			
			test("/totp - Verify user sign-in via TOTP.", async (): Promise<void> => {
				
				fail("Test has not yet been written.");
				
			});
			
			test("/sms - Verify user sign-in via SMS.", async (): Promise<void> => {
				
				fail("Test has not yet been written.");
				
			});
			
		});
		
	});
	
	describe("/me - 'Self' user accessor methods.", () => {
	
	
	
	});
	
});