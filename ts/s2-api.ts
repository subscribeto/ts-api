/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	4:18 PM -- July 11th, 2019.
 *	Project: @subscribeto/ts-api
 */

import { S2APIResponse } from "./s2-api-response";

type HTTPMethod = "GET" | "POST" | "PUT" | "DELETE";
type APIRequestMethod = <R>(requestMethod: HTTPMethod, endpoint: string, body?: any, token?: string) => Promise<S2APIResponse<R>>;

/**
 * Global variables and methods pertaining to the sub.scribe.to API.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
export class S2API {
	
	public static readonly BASE_URL: string = "http://api.scribe.to";
	
	private static apiRequestMethod: APIRequestMethod | undefined;
	
	protected static setNetworkImplementation(implementation: APIRequestMethod): void {
		
		S2API.apiRequestMethod = implementation;
		
	}
	
	public static async makeRequest<R>(
		requestMethod: HTTPMethod,
		endpoint: string,
		body?: any,
		token?: string): Promise<S2APIResponse<R>> {
		
		if (S2API.apiRequestMethod !== undefined) return S2API.apiRequestMethod(requestMethod, endpoint, body, token);
		else {
			
			throw new Error("ERR | Attempted to use the sub.scribe.to API without providing an implementation for " +
				"your environment. You're probably forgetting to use either @subscribeto/ts-api-browser or " +
				"@subscribeto/ts-api-node. Check the documentation for your respective platform's package for a fix.");
			
		}
		
	}
	
	/**
	 * Returns true if the provided content is valid JSON.
	 *
	 * @param content Content to test for validity as JSON.
	 * @return true if the provided content is valid JSON.
	 */
	public static isJSON(content: any): boolean {
	
		try { JSON.parse(content); }
		catch (e) { return false; }
		
		return true;
	
	}
	
}