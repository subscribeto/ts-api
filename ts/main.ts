/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	10:53 PM -- June 11th, 2019.
 *	Project: @subscribeto/ts-api
 */

/**
 * NPM main class used for exporting this package's contents.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */

export { S2API }			from "./s2-api";
export { S2APIResponse }	from "./s2-api-response"
export { S2Endpoint }		from "./raw-access/s2-endpoint"

export {
	S2UserEndpoint,
	S2UserAuthenticationEndpoint,
	S2UserSignUpEndpoint,
	S2UserSignInEndpoint
} from "./raw-access/s2-user-endpoint";