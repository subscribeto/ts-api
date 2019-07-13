import { ObjectTypeDefinition, Type } from "typit";
export declare class S2TypitTokenResponseStructure implements ObjectTypeDefinition {
    [property: string]: Type | ObjectTypeDefinition;
    readonly token: Type;
    readonly type: Type;
}
