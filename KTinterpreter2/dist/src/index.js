"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const analyse_1 = require("./analyse");
const context_1 = require("./context");
const ParserMethod_1 = require("./ParserMethod");
const TokenParser_1 = require("./TokenParser");
let code = `
    경태aa는4;
    경태g는aa귀1;

    내가_데g"나는야"aa"경 태"123;

    여기서문제aa끔3
    헤
     경태b는7;
     경태c는2;
     경태d는8;
     경태e는1;
     내가_데b귀c귀d;
    응;

    여기서문제5끔3
    헤
     내가_데b귀c귀d;
    응;

    여기서문제2끔3
    헤
     내가_데b귀c귀d;
    응;
`;
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
context.output.forEach((v) => {
    console.log(v);
});
//# sourceMappingURL=index.js.map