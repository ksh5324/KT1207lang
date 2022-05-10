import { Token } from "./Token";

class TokenParser {
  private code: string;
  private tokenList = new Array<Token>();

  constructor(code: string) {
    this.code = code;
  }

  private charIndex = 0;
  private getChar(): string | null {
    if (this.code.length < this.charIndex) return null;

    return this.code[this.charIndex++];
  }

  public parseAndGetTokens(): Array<Token> {
    let currentChar = this.getChar();
    while (currentChar != null) {
      while (currentChar === " ") {
        currentChar = this.getChar();
      }
      if (currentChar == '"') {
        currentChar = this.getChar();
        // string
        let stringBuf = currentChar;
        while (currentChar != '"') {
          currentChar = this.getChar();
          stringBuf += currentChar!!;
        }
        stringBuf = stringBuf?.substring(0, stringBuf.length - 1)!!;
        console.log(stringBuf);
      } else {
        let symbolBuf = currentChar;
        // currentChar = this.getChar();
        // string

        while (currentChar?.match(/[a-zA-Z]/)) {
          currentChar = this.getChar();
          if (currentChar != null) {
            symbolBuf += currentChar!!;
          }
        }
        console.log("symbol: " + symbolBuf);
      }

      currentChar = this.getChar();
    }

    return this.tokenList;
  }
}

export { TokenParser };
