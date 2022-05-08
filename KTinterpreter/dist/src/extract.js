"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extract = void 0;
const Token_1 = require("./Token");
class extract {
    constructor() {
        this.s = "";
        this.type = null;
        this.text = "";
    }
    clearToken() {
        this.type = null;
        this.text = "";
    }
    nextToken(c, done) {
        // if (c == " ") return 0;
        this.s.concat(c);
        if (c.match(/[A-Za-z0-9_]/) && (this.type === 1 || this.type === null)) {
            this.type = Token_1.Token_type.identifier;
            this.text = this.text.concat(c);
            if (done === "done") {
                console.log("1" + this.text);
                return {
                    text: this.text,
                    type: this.type,
                };
            }
            return 0;
        }
        console.log("2" + this.text);
        return {
            text: this.text,
            type: this.type,
        };
    }
}
exports.extract = extract;
//# sourceMappingURL=extract.js.map