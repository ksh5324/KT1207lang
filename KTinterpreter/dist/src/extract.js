"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extract = void 0;
const Token_1 = require("./Token");
class extract {
    constructor() {
        this.s = "";
        //   current: string = "";
        this.type = null;
        this.text = "";
    }
    clearToken() {
        this.type = null;
        this.text = "";
        this.s = "";
    }
    nextToken(c, done) {
        // if (c == " ") return 0;
        this.s.concat(c);
        // 식별자
        if (c.match(/[A-Za-z0-9_]/) && (this.type === 1 || this.type === null)) {
            this.type = Token_1.Token_type.identifier;
            this.text = this.text.concat(c);
            if (done === "done") {
                return {
                    text: this.text,
                    type: this.type,
                };
            }
            return 0;
        }
        // 변수
        if (c.match(/[경|태]/) && (this.type === 2 || this.type === null)) {
            this.type = 2;
            this.text = this.text.concat(c);
            if (this.text.match(/경태/)) {
                return {
                    text: this.text,
                    type: this.type,
                };
            }
            else {
                return 0;
            }
        }
        return {
            text: this.text,
            type: this.type,
        };
    }
}
exports.extract = extract;
//# sourceMappingURL=extract.js.map