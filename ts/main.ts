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

import readline from "readline";
import { S2UserSignUpEndpoint } from "./raw-access/s2-user-endpoint";
import { S2APIResponse } from "./s2-api-response";
import { S2TokenResponseStructure } from "./interfaces/s2-token-response-structure";

export { S2API }			from "./s2-api";
export { S2APIResponse }	from "./s2-api-response"
export { S2Endpoint }		from "./raw-access/s2-endpoint"

export {
	S2UserEndpoint,
	S2UserAuthenticationEndpoint,
	S2UserSignUpEndpoint,
	S2UserSignInEndpoint
} from "./raw-access/s2-user-endpoint";

const main: () => Promise<void> = async (): Promise<void> => {
	
	let response1: S2APIResponse<S2TokenResponseStructure> = await S2UserSignUpEndpoint.signUp("trevorsears.main@gmail.com", "alpine");
	let emailCode: string = await prompt("What is the email code? ");
	let response2: S2APIResponse<S2TokenResponseStructure> = await S2UserSignUpEndpoint.finalize(response1.getBody().token, emailCode);
	let sessionToken: string = response2.getBody().token;
	
	console.log("Session token: " + sessionToken);
	
};

const prompt: (question: string) => Promise<string> = async (question: string): Promise<string> => {
	
	return new Promise<string>((resolve: (response: string) => any, reject: () => any): void => {
		
		let readlineInstance = readline.createInterface({
			
			input: process.stdin,
			output: process.stdout
			
		});
		
		readlineInstance.question(question, (response: string): void => {
			
			resolve(response);
			readlineInstance.close();
			
		});
	
	});
	
};

main();