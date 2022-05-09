"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TokenParser_1 = require("./TokenParser");
const code = `
    const code = "wow I love it!" dfads
`;
const parser = new TokenParser_1.TokenParser(code);
parser.parseAndGetTokens();
//# sourceMappingURL=index.js.map