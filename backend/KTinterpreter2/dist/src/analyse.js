"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Analyse = void 0;
const ParserMethod_1 = require("./ParserMethod");
const TokenParser_1 = require("./TokenParser");
class Analyse {
    constructor(tokenList, context) {
        this.tokenIndex = 0;
        this.tokenList = [];
        this.currentToken = null;
        this.variable = [];
        this.output = [];
        this.bool = false;
        this.tokenList = tokenList;
        this.variable = context.variable;
        this.output = context.output;
        this.context = context;
    }
    getNextToken() {
        this.currentToken = this.tokenList[this.tokenIndex];
        this.tokenIndex++;
    }
    tokenResult() {
        while (this.tokenIndex <= this.tokenList.length - 1) {
            this.tokenResultSave();
        }
        return {
            variable: this.variable,
            output: this.output,
            bool: this.bool,
        };
    }
    tokenResultSave() {
        var _a, _b, _c, _d, _e, _f;
        this.getNextToken();
        if (((_a = this.currentToken) === null || _a === void 0 ? void 0 : _a.type) === 2) {
            if (this.tokenList[this.tokenIndex].type !== 1) {
                throw Error("잘못된 변수 이름");
            }
            this.getNextToken();
            if ((0, ParserMethod_1.variableIncludes)(this.currentToken.value, this.variable)) {
                this.variable.push({
                    id: this.currentToken.value,
                    value: null,
                });
            }
            else {
                throw Error(this.currentToken.value + "는 이미 선언된 변수입니다.");
            }
        }
        if (((_b = this.currentToken) === null || _b === void 0 ? void 0 : _b.type) === 3) {
            if (this.tokenList[this.tokenIndex - 2].type === 1) {
                if (!(0, ParserMethod_1.variableIncludes)(this.tokenList[this.tokenIndex - 2].value, this.variable)) {
                    const change = this.variable.findIndex((v) => v.id === this.tokenList[this.tokenIndex - 2].value);
                    this.variable[change].value = this.getValue();
                }
                else {
                    throw Error(this.currentToken.value + "는 이미 선언된 변수입니다.");
                }
            }
        }
        if (((_c = this.currentToken) === null || _c === void 0 ? void 0 : _c.type) === 6) {
            this.output.push(this.getStringValue());
        }
        if (((_d = this.currentToken) === null || _d === void 0 ? void 0 : _d.type) === 17) {
            this.bool = this.getBool();
        }
        if (((_e = this.currentToken) === null || _e === void 0 ? void 0 : _e.type) === 22) {
            if (this.tokenList[this.tokenIndex].type === 23) {
                const parser = new TokenParser_1.TokenParser(this.tokenList[this.tokenIndex].value);
                const object = parser.parseAndGetTokens();
                const analyse2 = new Analyse(object, this.context);
                const middle2 = analyse2.tokenResult();
                this.bool = middle2.bool;
            }
            else {
                throw Error("조건이 잘못됨");
            }
        }
        if (((_f = this.currentToken) === null || _f === void 0 ? void 0 : _f.type) === 12 && this.bool) {
            let distribute = this.currentToken.value.split(";");
            distribute.pop();
            // console.log(distribute);
            distribute.forEach((v) => {
                const parser = new TokenParser_1.TokenParser(v);
                const object = parser.parseAndGetTokens();
                const analyse2 = new Analyse(object, this.context);
                const middle2 = analyse2.tokenResult();
                this.context.variable = middle2.variable;
                this.context.output = middle2.output;
            });
        }
    }
    getValue() {
        const operatorToken = [];
        let operatorTokenIndex = 0;
        let middleValue = "";
        while (this.tokenIndex <= this.tokenList.length - 1) {
            this.getNextToken();
            operatorToken.push(this.currentToken);
        }
        while (operatorTokenIndex <= operatorToken.length - 1) {
            if (operatorToken[operatorTokenIndex].type === 1) {
                const change = this.variable.findIndex((v) => v.id === operatorToken[operatorTokenIndex].value);
                middleValue = middleValue.concat("" + this.variable[change].value);
            }
            else if (operatorToken[operatorTokenIndex].type === 4) {
                middleValue = middleValue.concat("" + operatorToken[operatorTokenIndex].value);
            }
            else if (operatorToken[operatorTokenIndex].type === 7) {
                middleValue = middleValue.concat("+");
            }
            else if (operatorToken[operatorTokenIndex].type === 8) {
                middleValue = middleValue.concat("-");
            }
            else if (operatorToken[operatorTokenIndex].type === 9) {
                middleValue = middleValue.concat("*");
            }
            else if (operatorToken[operatorTokenIndex].type === 10) {
                middleValue = middleValue.concat("/");
            }
            else if (operatorToken[operatorTokenIndex].type === 11) {
                middleValue = middleValue.concat("%");
            }
            else {
                throw Error("잘못된 식입니다");
            }
            operatorTokenIndex++;
        }
        return eval(middleValue);
    }
    getStringValue() {
        const operatorToken = [];
        let operatorTokenIndex = 0;
        let middleValue = "";
        let resultValue = "";
        while (this.tokenIndex <= this.tokenList.length - 1) {
            this.getNextToken();
            operatorToken.push(this.currentToken);
        }
        while (operatorTokenIndex <= operatorToken.length - 1) {
            if (operatorToken[operatorTokenIndex].type === 1) {
                const change = this.variable.findIndex((v) => v.id === operatorToken[operatorTokenIndex].value);
                middleValue = middleValue.concat("" + this.variable[change].value);
            }
            else if (operatorToken[operatorTokenIndex].type === 4) {
                middleValue = middleValue.concat("" + operatorToken[operatorTokenIndex].value);
            }
            else if (operatorToken[operatorTokenIndex].type === 7) {
                middleValue = middleValue.concat("+");
            }
            else if (operatorToken[operatorTokenIndex].type === 8) {
                middleValue = middleValue.concat("-");
            }
            else if (operatorToken[operatorTokenIndex].type === 9) {
                middleValue = middleValue.concat("*");
            }
            else if (operatorToken[operatorTokenIndex].type === 10) {
                middleValue = middleValue.concat("/");
            }
            else if (operatorToken[operatorTokenIndex].type === 11) {
                middleValue = middleValue.concat("%");
            }
            else if (operatorToken[operatorTokenIndex].type === 5) {
                resultValue = resultValue.concat(eval(middleValue) + operatorToken[operatorTokenIndex].value);
                middleValue = "";
            }
            else {
                throw Error("잘못된 식입니다");
            }
            operatorTokenIndex++;
        }
        resultValue = resultValue.concat(eval(middleValue));
        return resultValue;
    }
    getBool() {
        const operatorToken = [];
        let operatorTokenIndex = 0;
        let middleValue = "";
        while (this.tokenIndex <= this.tokenList.length - 1) {
            this.getNextToken();
        }
        for (let i = 0; i <= this.tokenList.length - 1; i++) {
            operatorToken.push(this.tokenList[i]);
        }
        while (operatorTokenIndex <= operatorToken.length - 1) {
            if (operatorToken[operatorTokenIndex].type === 1) {
                const change = this.variable.findIndex((v) => v.id === operatorToken[operatorTokenIndex].value);
                middleValue = middleValue.concat("" + this.variable[change].value);
            }
            else if (operatorToken[operatorTokenIndex].type === 4) {
                middleValue = middleValue.concat("" + operatorToken[operatorTokenIndex].value);
            }
            else if (operatorToken[operatorTokenIndex].type === 17) {
                middleValue = middleValue.concat(">");
            }
            else if (operatorToken[operatorTokenIndex].type === 18) {
                middleValue = middleValue.concat(">=");
            }
            else if (operatorToken[operatorTokenIndex].type === 19) {
                middleValue = middleValue.concat("<");
            }
            else if (operatorToken[operatorTokenIndex].type === 20) {
                middleValue = middleValue.concat("<=");
            }
            else if (operatorToken[operatorTokenIndex].type === 21) {
                middleValue = middleValue.concat("=");
            }
            else {
                throw Error("잘못된 식입니다");
            }
            operatorTokenIndex++;
        }
        return eval(middleValue);
    }
}
exports.Analyse = Analyse;
//# sourceMappingURL=analyse.js.map