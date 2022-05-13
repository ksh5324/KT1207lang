"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const analyse_1 = require("./analyse");
const context_1 = require("./context");
const ParserMethod_1 = require("./ParserMethod");
const TokenParser_1 = require("./TokenParser");
let code = `
    경태a는3;
    경태g는a귀1;

    내가_데g"sdf"a"3fe"3;
`;
code = code
    .split("\n")
    .map((line) => line.trim())
    .join("");
const context = new context_1.Context();
let distribute = code.split(";");
let start = (0, ParserMethod_1.getAllIndexes)(distribute, "헤");
let end = (0, ParserMethod_1.getAllIndexes)(distribute, "응");
distribute = (0, ParserMethod_1.curl)(start, end, distribute);
distribute.forEach((v) => {
    const parser = new TokenParser_1.TokenParser(v);
    const object = parser.parseAndGetTokens();
    const analyse = new analyse_1.Analyse(object, context);
    const middle = analyse.tokenResult();
    context.variable = middle.variable;
    context.output = middle.output;
    // console.log(context);
});
context.output.forEach((v) => {
    console.log(v);
});
//# sourceMappingURL=index.js.map