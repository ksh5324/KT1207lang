"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testCode = `
경태 a 는 3;
내가_데 경대(a);
`;
function main(code) {
    code = code
        .split("\n")
        .map((line) => line.trim())
        .join("");
    const distribute = code.split(";");
    console.log(code);
    console.log(distribute);
    const outputs = [];
}
exports.default = main;
main(testCode);
//# sourceMappingURL=index.js.map