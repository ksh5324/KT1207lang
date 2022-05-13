import { Context, variable } from "./context";
export declare class Analyse {
    tokenIndex: number;
    tokenList: tokenList_Type[];
    currentToken: tokenList_Type | null;
    context: Context;
    variable: variable[];
    output: string[];
    bool: boolean;
    constructor(tokenList: tokenList_Type[], context: Context);
    getNextToken(): void;
    tokenResult(): {
        variable: variable[];
        output: string[];
        bool: boolean;
    };
    tokenResultSave(): void;
    getValue(): any;
    getStringValue(): string;
    getBool(): any;
}
export declare type tokenList_Type = {
    type: number;
    value: any;
};
