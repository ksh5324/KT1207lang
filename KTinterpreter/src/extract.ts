import { tokenDataType } from "./saveToken";
import { Token_type } from "./Token";

export class extract {
  s: string = "";
  //   current: string = "";
  type: number | null = null;
  text: string = "";

  clearToken(): void {
    this.type = null;
    this.text = "";
    this.s = "";
  }

  nextToken(c: string, done: string): tokenDataType | number {
    // if (c == " ") return 0;
    this.s.concat(c);

    // 식별자
    if (c.match(/[A-Za-z0-9_]/) && (this.type === 1 || this.type === null)) {
      this.type = Token_type.identifier;
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

    return {
      text: this.text,
      type: this.type,
    };
  }
}
