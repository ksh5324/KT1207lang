"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parser = void 0;
const extract_1 = require("./extract");
const parser = (v) => {
    const extractToken = new extract_1.extract();
    let i = 0;
    const tokenZip = [];
    let p = 0;
    for (; v[i]; i++) {
        if (v[i + 1] == null) {
            p = extractToken.nextToken(v[i], "done");
        }
        else {
            p = extractToken.nextToken(v[i], "");
        }
        if (typeof p !== "number") {
            tokenZip.push(p);
            extractToken.clearToken();
        }
    }
    return tokenZip;
};
exports.parser = parser;
//# sourceMappingURL=parser.js.map