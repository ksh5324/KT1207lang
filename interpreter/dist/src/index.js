"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const compile_1 = require("./compile");
const testCode = `
경태 a 는 3;
경태 c 는 "sdf";
경태 b 는 3.14;
경태 g 는 true;
내가_데 경대(a);
`;
function main(code) {
    code = code
        .split("\n")
        .map((line) => line.trim())
        .join("");
    const distribute = code.split(";");
    const compile = new compile_1.Compile();
    const outputs = [];
    distribute.forEach((v) => {
        const line = compile.run(v);
        if (typeof line === "string") {
            outputs.push(line);
        }
    });
    console.log(outputs);
    console.log(compile.variable);
}
exports.default = main;
main(testCode);
//# sourceMappingURL=index.js.map