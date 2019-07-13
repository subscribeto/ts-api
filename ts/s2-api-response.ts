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
	
	private readonly rawXHR: XMLHttpRequest;
	
	private isVerified: boolean = false;
	
	public constructor(response: XMLHttpRequest, lazyInitialization: boolean = false) {
	
		this.rawXHR = response;
		
		if (!lazyInitialization) this.verify();
	
	}
	
	public verify(): boolean {
		
		if (this.isVerified) return true;
		
		// TODO [7/11/19 @ 4:32 PM] - Finish the 'verify' method.
		
		this.isVerified = true;
		
		return true;
		
	}
	
	public getBody(): R {
		
		if (!this.isVerified) {
			
			if (!this.verify()) {
				
				throw new Error("ERR | The response body did not conform to the expected type.");
				
			}
			
		}
		
		if (S2API.isJSON(this.rawXHR.response)) return JSON.parse(this.rawXHR.response) as unknown as R;
		else return this.rawXHR.response as unknown as R;
		
	}
	
	public getStatusCode(): number {
		
		return this.rawXHR.status;
		
	}
	
	public getRawXHR(): XMLHttpRequest {
		
		return this.rawXHR;
		
	}
	
}