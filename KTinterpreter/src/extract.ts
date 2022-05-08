import { tokenDataType } from "./saveToken";
import { Token_type } from "./Token";

export class extract {
  s: string = "";
  type: number | null = null;
  text: string = "";

  clearToken(): void {
    this.type = null;
    this.text = "";
  }

  nextToken(c: string, done: string): tokenDataType | number {
    // if (c == " ") return 0;
    this.s.concat(c);
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
    return {
      text: this.text,
      type: this.type,
    };
  }
}
