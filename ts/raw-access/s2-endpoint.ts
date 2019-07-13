/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	5:13 PM -- July 11th, 2019.
 *	Project: @subscribeto/ts-api
 */

import { S2API } from "../s2-api";

/**
 * A sub.scribe.to endpoint.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
export class S2Endpoint {
	
	public static getEndpointURL(append: string = ""): string {
		
		return S2API.BASE_URL + append;
		
	}
	
}