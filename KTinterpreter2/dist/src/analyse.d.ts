import { Context, variable } from "./context";
export declare class Analyse {
    tokenIndex: number;
    tokenList: tokenList_Type[];
    currentToken: tokenList_Type | null;
    variable: variable[];
    output: string[];
    constructor(tokenList: tokenList_Type[], context: Context);
    getNextToken(): void;
    tokenResult(): {
        variable: variable[];
        output: string[];
    };
    tokenResultSave(): void;
    getValue(): any;
    getStringValue(): string;
}
export declare type tokenList_Type = {
    type: number;
    value: any;
};
