"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parser_1 = require("./parser");
const testCode = `
sdfge sms;
`;
function main(code) {
    code = code
        .split("\n")
        .map((line) => line.trim())
        .join("");
    console.log(code);
    const distribute = code.split(";");
    distribute.forEach((v) => {
        console.log((0, parser_1.parser)(v));
    });
}
exports.default = main;
main(testCode);
//# sourceMappingURL=index.js.map