"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Compile = void 0;
const ktType_1 = require("./ktType");
const Token_1 = require("./Token");
class Compile {
    constructor() {
        this.code = "";
        this.variable = [];
        this.variableNum = 0;
    }
    run(line) {
        let result = "";
        let i = 1;
        // 변수 생성 코드
        if (line.includes(Token_1.literal_char.경태)) {
            const t = line.split(" ");
            this.makeVariable(t[i++], t);
        }
        if (result == "") {
            return;
        }
        return "sdf";
    }
    // 변수 생성 함수
    makeVariable(word, t) {
        this.variable[this.variableNum++] = {
            key: word,
            value: t.includes(Token_1.literal_char.는)
                ? t[t.indexOf(Token_1.literal_char.는) + 1]
                : ktType_1.경태머리,
        };
    }
}
exports.Compile = Compile;
//# sourceMappingURL=compile.js.map