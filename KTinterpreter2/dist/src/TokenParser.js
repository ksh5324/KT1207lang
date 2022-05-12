"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenParser = void 0;
const Token_1 = require("./Token");
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
                this.tokenList.push({ type: Token_1.Token.string, value: stringBuf });
            }
            else if (currentChar === null || currentChar === void 0 ? void 0 : currentChar.match(/[0-9.]/)) {
                let numBuf = currentChar;
                let pointNum = 0;
                while (currentChar === null || currentChar === void 0 ? void 0 : currentChar.match(/[0-9.]/)) {
                    currentChar = this.getChar();
                    pointNum = numBuf.split(".").length - 1;
                    if (currentChar === null || currentChar === void 0 ? void 0 : currentChar.match(/[0-9.]/)) {
                        numBuf += currentChar;
                    }
                    if (pointNum > 1) {
                        throw Error("point의 개수가 잘못되었습니다.");
                    }
                }
                this.tokenList.push({ type: Token_1.Token.number, value: numBuf });
                this.charIndex--;
            }
            else {
                let symbolBuf = currentChar;
                if (currentChar === null || currentChar === void 0 ? void 0 : currentChar.match(/[a-zA-Z]/)) {
                    // 식별자
                    while (currentChar === null || currentChar === void 0 ? void 0 : currentChar.match(/[a-zA-Z]/)) {
                        currentChar = this.getChar();
                        if (currentChar != null) {
                            if (currentChar.match(/[^a-zA-Z]/)) {
                                this.charIndex--;
                            }
                            else {
                                symbolBuf += currentChar;
                            }
                        }
                    }
                    this.tokenList.push({ type: Token_1.Token.identifier, value: symbolBuf });
                }
                else {
                    // 경태 -> 변수 선언 및 경 -> 곱하기 연산자 찾아내기
                    if (currentChar === null || currentChar === void 0 ? void 0 : currentChar.match(/경/)) {
                        while (currentChar === null || currentChar === void 0 ? void 0 : currentChar.match(/[경|태]/)) {
                            currentChar = this.getChar();
                            if (symbolBuf === null || symbolBuf === void 0 ? void 0 : symbolBuf.match(/경태/)) {
                                this.tokenList.push({ type: Token_1.Token.variable, value: symbolBuf });
                            } // if
                            else if (currentChar === null || currentChar === void 0 ? void 0 : currentChar.match(/[a-zA-Z]/)) {
                                if (symbolBuf === null || symbolBuf === void 0 ? void 0 : symbolBuf.includes("경경")) {
                                    console.log("번째 실행문에서" + "error: mul 연산자가 2개입니다.");
                                }
                                else {
                                    this.tokenList.push({ type: Token_1.Token.div, value: symbolBuf });
                                }
                            }
                            symbolBuf += currentChar;
                        } // while
                        this.charIndex--; // 한글자 초과 해결
                    } // symbol>var,mul if
                    else if (currentChar === null || currentChar === void 0 ? void 0 : currentChar.match(/는/)) {
                        console.log("assign: " + symbolBuf);
                    }
                    else if (currentChar === null || currentChar === void 0 ? void 0 : currentChar.match(/귀|여|운|태/)) {
                        switch (currentChar) {
                            case "귀":
                                this.tokenList.push({ type: Token_1.Token.sum, value: symbolBuf });
                                break;
                            case "여":
                                this.tokenList.push({ type: Token_1.Token.sub, value: symbolBuf });
                                break;
                            case "운":
                                this.tokenList.push({ type: Token_1.Token.mul, value: symbolBuf });
                                break;
                            case "태":
                                this.tokenList.push({ type: Token_1.Token.left, value: symbolBuf });
                                break;
                        }
                    }
                    else if (currentChar === null || currentChar === void 0 ? void 0 : currentChar.match(/내/)) {
                        while (currentChar === null || currentChar === void 0 ? void 0 : currentChar.match(/[내|가|_|데]/)) {
                            currentChar = this.getChar();
                            symbolBuf += currentChar;
                            if ((symbolBuf === null || symbolBuf === void 0 ? void 0 : symbolBuf.match(/내가_데/)) && (symbolBuf === null || symbolBuf === void 0 ? void 0 : symbolBuf.length) === 4) {
                                this.tokenList.push({ type: Token_1.Token.print, value: symbolBuf });
                            } // if
                            else if (currentChar === null || currentChar === void 0 ? void 0 : currentChar.match(/[a-zA-Z0-9]/)) {
                                break;
                            }
                            else if ((symbolBuf === null || symbolBuf === void 0 ? void 0 : symbolBuf.length) > 4) {
                                throw Error("error: 출력 식별자의 이름이 잘못되었습니다.");
                            }
                        }
                        this.charIndex--;
                    }
                    else if (currentChar === null || currentChar === void 0 ? void 0 : currentChar.match(/헤/)) {
                        while (currentChar !== "응") {
                            currentChar = this.getChar();
                            symbolBuf += currentChar;
                        }
                        this.tokenList.push({
                            type: Token_1.Token.start_curl,
                            value: symbolBuf === null || symbolBuf === void 0 ? void 0 : symbolBuf.substring(1, symbolBuf.length - 1),
                        });
                    }
                    else if (currentChar === null || currentChar === void 0 ? void 0 : currentChar.match(/살/)) {
                        // while (currentChar?.match(/[살|고|싶|지|않|아|\?]/)) {
                        //   currentChar = this.getChar();
                        //   symbolBuf += currentChar!!;
                        //   if (symbolBuf?.match(/살고싶지않아\?/)) {
                        //     console.log("if: " + symbolBuf);
                        //     while
                        //   } // if
                        // }
                    }
                    else {
                        throw Error("error: 알 수 없는 문자.");
                    }
                } // symbol if
            }
            currentChar = this.getChar();
        }
        return this.tokenList;
    }
}
exports.TokenParser = TokenParser;
//# sourceMappingURL=TokenParser.js.map