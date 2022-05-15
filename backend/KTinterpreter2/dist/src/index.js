"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.codeRun = void 0;
const analyse_1 = require("./analyse");
const context_1 = require("./context");
const ParserMethod_1 = require("./ParserMethod");
const TokenParser_1 = require("./TokenParser");
const codeRun = (code) => {
    code = code
        .split("\n")
        .map((line) => line.trim())
        .join("");
    // console.log(code);
    const context = new context_1.Context();
    let distribute = code.split(";");
    let start = (0, ParserMethod_1.getAllIndexes)(distribute, "헤");
    let end = (0, ParserMethod_1.getAllIndexes)(distribute, "응");
    distribute = (0, ParserMethod_1.curl)(start, end, distribute);
    // console.log(distribute);
    distribute.forEach((v) => {
        const parser = new TokenParser_1.TokenParser(v);
        const object = parser.parseAndGetTokens();
        // console.log(object);
        const analyse = new analyse_1.Analyse(object, context);
        const middle = analyse.tokenResult();
        context.variable = middle.variable;
        context.output = middle.output;
        // console.log(context);
    });
    // context.output.forEach((v) => {
    //   console.log(v);
    // });
    return context.output;
};
exports.codeRun = codeRun;
//# sourceMappingURL=index.js.map