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
        // let i: number = 1;
        const t = line.split(" ");
        // 변수 생성 코드
        if (line.includes(Token_1.literal_char.경태)) {
            this.makeVariable(t[t.indexOf(Token_1.literal_char.경태) + 1]);
        }
        // 대입 코드
        if (line.includes(Token_1.literal_char.는)) {
            this.substitute(t);
        }
        // 출력 코드
        if (line.includes(Token_1.inputOutput.내가_데)) {
            this.printValue(t);
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
    // 대입 함수
    substitute(t) {
        let r = this.variable.find((v) => v.key === t[t.indexOf(Token_1.literal_char.는) - 1]);
        if (t.includes(Token_1.operator.깜) ||
            t.includes(Token_1.operator.찍) ||
            t.includes(Token_1.operator.한) ||
            t.includes(Token_1.operator.경) ||
            t.includes(Token_1.operator.태)) {
            if (t.includes(Token_1.operator.깜)) {
                let p = this.variable.find((v) => v.key === t[t.indexOf(Token_1.operator.깜) - 1]);
                let p2 = this.variable.find((v) => v.key === t[t.indexOf(Token_1.operator.깜) + 1]);
                r.value = Number(p.value) + Number(p2.value);
            }
            if (t.includes(Token_1.operator.찍)) {
                let p = this.variable.find((v) => v.key === t[t.indexOf(Token_1.operator.찍) - 1]);
                let p2 = this.variable.find((v) => v.key === t[t.indexOf(Token_1.operator.찍) + 1]);
                r.value = Number(p.value) - Number(p2.value);
            }
            if (t.includes(Token_1.operator.한)) {
                let p = this.variable.find((v) => v.key === t[t.indexOf(Token_1.operator.한) - 1]);
                let p2 = this.variable.find((v) => v.key === t[t.indexOf(Token_1.operator.한) + 1]);
                r.value = Number(p.value) * Number(p2.variableNum);
            }
            if (t.includes(Token_1.operator.경)) {
                let p = this.variable.find((v) => v.key === t[t.indexOf(Token_1.operator.경) - 1]);
                let p2 = this.variable.find((v) => v.key === t[t.indexOf(Token_1.operator.경) + 1]);
                r.value = Number(p.value) / Number(p2.value);
            }
            if (t.includes(Token_1.operator.태)) {
                let p = this.variable.find((v) => v.key === t[t.indexOf(Token_1.operator.태) - 1]);
                let p2 = this.variable.find((v) => v.key === t[t.indexOf(Token_1.operator.태) + 1]);
                r.value = Number(p.value) % Number(p2.value);
            }
        }
        else {
            r.value = t[t.indexOf(Token_1.literal_char.는) + 1];
        }
    }
    // 출력 함수
    printValue(t) {
        var _a, _b;
        if (t[t.indexOf(Token_1.inputOutput.내가_데) + 1].includes('"')) {
            let r = this.variable.find((v, index) => v.key === t[t.indexOf(Token_1.inputOutput.내가_데) + 2]);
            console.log(t[t.indexOf(Token_1.inputOutput.내가_데) + 1].slice(1, -1) +
                " " +
                r.value +
                (t[t.indexOf(Token_1.inputOutput.내가_데) + 3] !== undefined
                    ? " " + ((_a = t[t.indexOf(Token_1.inputOutput.내가_데) + 3]) === null || _a === void 0 ? void 0 : _a.slice(1, -1))
                    : ""));
        }
        else {
            let r = this.variable.find((v) => v.key === t[t.indexOf(Token_1.inputOutput.내가_데) + 1]);
            console.log(r.value +
                (t[t.indexOf(Token_1.inputOutput.내가_데) + 3] !== undefined
                    ? " " + ((_b = t[t.indexOf(Token_1.inputOutput.내가_데) + 3]) === null || _b === void 0 ? void 0 : _b.slice(1, -1))
                    : ""));
        }
    }
}
exports.Compile = Compile;
//# sourceMappingURL=compile.js.map