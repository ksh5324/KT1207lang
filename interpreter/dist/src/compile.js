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
        var _a, _b;
        let result = "";
        let i = 1;
        const t = line.split(" ");
        // 변수 생성 코드
        if (line.includes(Token_1.literal_char.경태)) {
            this.makeVariable(t[t.indexOf(Token_1.literal_char.경태) + 1]);
        }
        // 대입 코드
        if (line.includes(Token_1.literal_char.는)) {
            let r = this.variable.find((v, index) => v.key === t[t.indexOf(Token_1.literal_char.는) - 1]);
            r.value = t[t.indexOf(Token_1.literal_char.는) + 1];
        }
        // 출력 코드
        if (line.includes(Token_1.inputOutput.내가_데)) {
            if (t[t.indexOf(Token_1.inputOutput.내가_데) + 1].includes('"')) {
                let r = this.variable.find((v, index) => v.key === t[t.indexOf(Token_1.inputOutput.내가_데) + 2]);
                console.log(t[t.indexOf(Token_1.inputOutput.내가_데) + 1].slice(1, -1) +
                    r.value +
                    (t[t.indexOf(Token_1.inputOutput.내가_데) + 3] !== undefined
                        ? (_a = t[t.indexOf(Token_1.inputOutput.내가_데) + 3]) === null || _a === void 0 ? void 0 : _a.slice(1, -1)
                        : ""));
            }
            else {
                let r = this.variable.find((v, index) => v.key === t[t.indexOf(Token_1.inputOutput.내가_데) + 1]);
                console.log(r.value +
                    (t[t.indexOf(Token_1.inputOutput.내가_데) + 3] !== undefined
                        ? (_b = t[t.indexOf(Token_1.inputOutput.내가_데) + 3]) === null || _b === void 0 ? void 0 : _b.slice(1, -1)
                        : ""));
            }
        }
        if (result == "") {
            return;
        }
        return "sdf";
    }
    // 변수 생성 함수
    makeVariable(word) {
        this.variable[this.variableNum++] = {
            key: word,
            value: ktType_1.경태머리,
        };
    }
}
exports.Compile = Compile;
//# sourceMappingURL=compile.js.map