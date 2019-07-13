/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	4:40 PM -- July 11th, 2019.
 *	Project: @subscribeto/ts-api
 */

/**
 * The response structures received from the user signup endpoint.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
export interface S2TokenResponseStructure {
	
	/**
	 * The session token for the newly created session.
	 */
	readonly token: string;
	
	/**
	 * The type of token received.
	 *
	 * For this endpoint, this will always be "sign-up".
	 */
	readonly type: string;

}