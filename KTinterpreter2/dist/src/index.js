"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ParserMethod_1 = require("./ParserMethod");
const TokenParser_1 = require("./TokenParser");
let code = `
    "wow I love it!"dfads경경ss경e경태js는efjlsej경태dljk귀귀여운귀여운귀여여운귀여운내가_데323.234경태;
    헤
      경태34ekll;
      dfjsdjflksl;
      dfjsei;
    응;
    헤
      경태34ekll;
      dfjsdjflksl;
      dfjsei;
    응;
`;
code = code
    .split("\n")
    .map((line) => line.trim())
    .join("");
let distribute = code.split(";");
let start = (0, ParserMethod_1.getAllIndexes)(distribute, "헤");
let end = (0, ParserMethod_1.getAllIndexes)(distribute, "응");
distribute = (0, ParserMethod_1.curl)(start, end, distribute);
distribute.forEach((v) => {
    const parser = new TokenParser_1.TokenParser(v);
    const object = parser.parseAndGetTokens();
    console.log(object);
    console.log("-------------------------------------------------------");
});
//# sourceMappingURL=index.js.map