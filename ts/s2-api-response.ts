/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	4:20 PM -- July 11th, 2019.
 *	Project: @subscribeto/ts-api
 */

import { S2API } from "./s2-api";

/**
 * A standardized response object received from any and every call to the API.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
export class S2APIResponse<R> {
	
	private readonly response: R;
	
	private readonly statusCode: number;
	
	public constructor(response: R, statusCode: number) {
	
		this.response = response;
		this.statusCode = statusCode;
	
	}
	
	public getBody(): R {
		
		if (S2API.isJSON(this.response)) return JSON.parse(this.response as any) as unknown as R;
		else return this.response as unknown as R;
		
	}
	
	public getStatusCode(): number {
		
		return this.statusCode;
		
	}
	
}