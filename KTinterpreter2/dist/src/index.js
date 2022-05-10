"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TokenParser_1 = require("./TokenParser");
let code = `
    "wow I love it!"dfads경경ss경e경옮태js는efjlsej경ㄱ경태dljk귀귀여운귀여운귀여여운귀여운내가_데323.234경태;
`;
code = code
    .split("\n")
    .map((line) => line.trim())
    .join("");
const distribute = code.split(";");
distribute.forEach((v) => {
    console.log("-------------------------------------------------------");
    const parser = new TokenParser_1.TokenParser(v);
    parser.parseAndGetTokens();
});
//# sourceMappingURL=index.js.map