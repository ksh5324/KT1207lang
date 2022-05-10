"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TokenParser_1 = require("./TokenParser");
let code = `
    const code ="wow I love it!"dfads
`;
code = code
    .split("\n")
    .map((line) => line.trim())
    .join("");
const parser = new TokenParser_1.TokenParser(code);
parser.parseAndGetTokens();
//# sourceMappingURL=index.js.map