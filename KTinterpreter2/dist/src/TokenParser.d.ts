import { tokenList_Type } from "./analyse";
declare class TokenParser {
    private code;
    private tokenList;
    constructor(code: string);
    private charIndex;
    private getChar;
    parseAndGetTokens(): Array<tokenList_Type>;
}
export { TokenParser };
