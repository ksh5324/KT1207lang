"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const context_1 = require("./context");
const parser_1 = require("./parser");
const testCode = `
경태k;
`;
function main(code) {
    code = code
        .split("\n")
        .map((line) => line.trim())
        .join("");
    const context = new context_1.Context();
    const distribute = code.split(";");
    distribute.forEach((v) => {
        console.log((0, parser_1.parser)(v));
        // analysis();
    });
}
exports.default = main;
main(testCode);
//# sourceMappingURL=index.js.map