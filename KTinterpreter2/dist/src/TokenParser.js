"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenParser = void 0;
class TokenParser {
    constructor(code) {
        this.tokenList = new Array();
        this.charIndex = 0;
        this.code = code;
    }
    getChar() {
        if (this.code.length < this.charIndex)
            return null;
        return this.code[this.charIndex++];
    }
    parseAndGetTokens() {
        let currentChar = this.getChar();
        while (currentChar != null) {
            while (currentChar === " ") {
                currentChar = this.getChar();
            }
            if (currentChar == '"') {
                currentChar = this.getChar();
                // string
                let stringBuf = currentChar;
                while (currentChar != '"') {
                    currentChar = this.getChar();
                    stringBuf += currentChar;
                }
                stringBuf = stringBuf === null || stringBuf === void 0 ? void 0 : stringBuf.substring(0, stringBuf.length - 1);
                console.log(stringBuf);
            }
            else {
                let symbolBuf = currentChar;
                // currentChar = this.getChar();
                // string
                while (currentChar === null || currentChar === void 0 ? void 0 : currentChar.match(/[a-zA-Z]/)) {
                    currentChar = this.getChar();
                    if (currentChar != null) {
                        symbolBuf += currentChar;
                    }
                }
                console.log("symbol: " + symbolBuf);
            }
            currentChar = this.getChar();
        }
        return this.tokenList;
    }
}
exports.TokenParser = TokenParser;
//# sourceMappingURL=TokenParser.js.map