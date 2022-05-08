import { tokenDataType } from "./saveToken";
import { Token_type } from "./Token";

export class extract {
  s: string = "";
  current: string = "";
  type: number = -1;
  text: string = "";

  clearToken(): void {
    this.type = -1;
    this.text = "";
    this.s = this.current;
  }

  nextToken(c: string, done: string): tokenDataType | number {
    if (c == " ") return 0;
    this.s.concat(c);
    this.current = c;

    // 식별자
    if (c.match(/[A-Za-z0-9_]/) && (this.type === 1 || this.type === -1)) {
      if (this.text == "" || (this.text !== "" && this.s[0].match(/[^0-9]/))) {
        if (this.text == "" && c.match(/[^0-9]/)) {
          this.text = this.text.concat(c);
          this.type = Token_type.identifier;
          if (done === "done") {
            return {
              text: this.text,
              type: this.type,
            };
          }
          if (c.match(/[^A-Za-z0-9]/)) {
            return {
              text: this.text,
              type: this.type,
            };
          }
        }
      }
    }

    // 변수
    if (c.match(/[경|태]/) && (this.type === 2 || this.type === -1)) {
      this.type = Token_type.variable;
      this.text = this.text.concat(c);
      if (this.text.match(/경태/)) {
        return {
          text: this.text,
          type: this.type,
        };
      } else {
        return 0;
      }
    }

    // 대입 연산자
    if (c.match(/는/)) {
      this.type = Token_type.replace;
      this.text = this.text.concat(c);
      return {
        text: this.text,
        type: this.type,
      };
    }

    // 숫자
    if (this.current.match(/[0-9]/)) {
      this.type = Token_type.number;
      this.text = this.text.concat(c);
      if (done === "done") {
        return {
          text: this.text,
          type: this.type,
        };
      }
      return 0;
    }

    if (c.match(/\"/)) {
      this.text = this.text.concat(c);
      this.type = Token_type.string;
    }

    return {
      text: this.text,
      type: this.type,
    };
  }
}
