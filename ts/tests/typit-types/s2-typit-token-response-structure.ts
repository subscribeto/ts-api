/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	5:10 PM -- July 12th, 2019.
 *	Project: @subscribeto/ts-api
 */

import { ObjectTypeDefinition, Type, StandardType } from "typit";

/**
 * The object type definition for {@link S2TokenResponseStructure}.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
export class S2TypitTokenResponseStructure implements ObjectTypeDefinition {
	
	[property: string]: Type | ObjectTypeDefinition;
	
	readonly token: Type = StandardType.STRING;
	
	readonly type: Type = StandardType.STRING;
	
}