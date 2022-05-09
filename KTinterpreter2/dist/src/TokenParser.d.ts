import { Token } from "./Token";
declare class TokenParser {
    private code;
    private tokenList;
    constructor(code: string);
    private charIndex;
    private getChar;
    parseAndGetTokens(): Array<Token>;
}
export { TokenParser };
