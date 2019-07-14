/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	4:14 PM -- July 11th, 2019.
 *	Project: @subscribeto/ts-api
 */

import { S2APIResponse } from "../s2-api-response";
import { S2TokenResponseStructure } from "../interfaces/s2-token-response-structure";
import { S2API } from "../s2-api";
import { S2Endpoint } from "./s2-endpoint";

/**
 * Raw accessor methods to the sub.scribe.to user endpoints.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
export class S2UserEndpoint extends S2Endpoint {
	
	/**
	 * Returns the URL for this endpoint class.
	 *
	 * @param append The text to append to the URL before returning it.
	 * @return The URL with text appended.
	 */
	public static getEndpointURL(append: string = ""): string {
		
		return super.getEndpointURL("/user") + append;
		
	}

}

/**
 * Raw accessor methods to the sub.scribe.to user authentication endpoints.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
export class S2UserAuthenticationEndpoint extends S2UserEndpoint {
	
	/**
	 * Returns the URL for this endpoint class.
	 *
	 * @param append The text to append to the URL before returning it.
	 * @return The URL with text appended.
	 */
	public static getEndpointURL(append: string = ""): string {
		
		return super.getEndpointURL("/auth") + append;
		
	}

}

/**
 * Raw accessor methods to the sub.scribe.to user sign-up endpoints.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
export class S2UserSignUpEndpoint extends S2UserAuthenticationEndpoint {
	
	/**
	 * Returns the URL for this endpoint class.
	 *
	 * @param append The text to append to the URL before returning it.
	 * @return The URL with text appended.
	 */
	public static getEndpointURL(append: string = ""): string {
		
		return super.getEndpointURL("/sign-up") + append;
		
	}
	
	/**
	 * Sign-up for a new sub.scribe.to account.
	 *
	 * This endpoint will give you a token and will email the provided email address with a verification code to be used
	 * with the {@link S2UserSignUpEndpoint#finalize} method alongside the aforementioned token in order to create a new
	 * account with the API.
	 *
	 * NOTE: Ensure that you actually call the {@link S2UserSignUpEndpoint#finalize} method after calling this method!
	 *
	 * @param email The email with which to create a new account.
	 * @param password The password to use as the newly created account's password.
	 * @return A promise that resolves to a {@link S2APIResponse} with a {@link S2TokenResponseStructure} inside.
	 */
	public static async signUp(email: string, password: string): Promise<S2APIResponse<S2TokenResponseStructure>> {
		
		return S2API.makeRequest<S2TokenResponseStructure>(
			"POST",
			S2UserSignUpEndpoint.getEndpointURL("/"),
			{ email, password }
		);
		
	}
	
	/**
	 * Finalize a new sub.scribe.to account sign-up, returning a session token for the newly created account.
	 *
	 * @param token The token provided as the response from the required call to {@link S2UserSignUpEndpoint#signUp}.
	 * @param code The code received via email at the email address provided in the required call to
	 * {@link S2UserSignUpEndpoint#signUp}.
	 * @return A promise that resolves to
	 */
	public static finalize(token: string, code: string): Promise<S2APIResponse<S2TokenResponseStructure>> {
		
		return S2API.makeRequest<S2TokenResponseStructure>(
			"POST",
			S2UserSignUpEndpoint.getEndpointURL("/finalize"),
			{ token, code }
		);
		
	}
	
}

/**
 * Raw accessor methods to the sub.scribe.to user sign-in endpoints.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
export class S2UserSignInEndpoint extends S2UserAuthenticationEndpoint {
	
	/**
	 * Returns the URL for this endpoint class.
	 *
	 * @param append The text to append to the URL before returning it.
	 * @return The URL with text appended.
	 */
	public static getEndpointURL(append: string = ""): string {
		
		return super.getEndpointURL("/sign-in") + append;
		
	}
	
	// public static async signIn(email: string, password: string): Promise<S2APIResponse<S2TokenResponseStructure>> {
	//
	//
	//
	// }
	//
	// public static async finalizeTOTP(token: string, code: string): Promise<S2APIResponse<S2TokenResponseStructure>> {
	//
	//
	// }
	//
	// public static async finalizeSMS(token: string, code: string): Promise<S2APIResponse<S2TokenResponseStructure>> {
	//
	//
	//
	// }
	
}