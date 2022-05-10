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
      } else if (currentChar?.match(/[0-9.]/)) {
        let numBuf = currentChar;
        let pointNum = 0;
        while (currentChar?.match(/[0-9.]/)) {
          currentChar = this.getChar();
          pointNum = numBuf.split(".").length - 1;
          if (currentChar?.match(/[0-9.]/)) {
            numBuf += currentChar!!;
          }
          if (pointNum > 1) {
            throw Error("point의 개수가 잘못되었습니다.");
          }
        }
        console.log("num: " + Number(numBuf));
        this.charIndex--;
      } else {
        let symbolBuf = currentChar;

        if (currentChar?.match(/[a-zA-Z]/)) {
          // 식별자
          while (currentChar?.match(/[a-zA-Z]/)) {
            currentChar = this.getChar();
            if (currentChar != null) {
              if (currentChar.match(/[^a-zA-Z]/)) {
                this.charIndex--;
              } else {
                symbolBuf += currentChar!!;
              }
            }
          }
          console.log("symbol: " + symbolBuf);
        } else {
          // 경태 -> 변수 선언 및 경 -> 곱하기 연산자 찾아내기
          if (currentChar?.match(/경/)) {
            while (currentChar?.match(/[경|태]/)) {
              currentChar = this.getChar();
              if (symbolBuf?.match(/경태/)) {
                console.log("var: " + symbolBuf);
              } // if
              else if (currentChar?.match(/[a-zA-Z]/)) {
                if (symbolBuf?.includes("경경")) {
                  console.log(
                    "번째 실행문에서" + "error: mul 연산자가 2개입니다."
                  );
                } else {
                  console.log("mul: " + symbolBuf);
                }
              }
              symbolBuf += currentChar!!;
            } // while
            this.charIndex--; // 한글자 초과 해결
          } // symbol>var,mul if
          else if (currentChar?.match(/는/)) {
            console.log("assign: " + symbolBuf);
          } else if (currentChar?.match(/귀|여|운|태/)) {
            switch (currentChar) {
              case "귀":
                console.log("sum: " + symbolBuf);
                break;
              case "여":
                console.log("sub: " + symbolBuf);
                break;
              case "운":
                console.log("div: " + symbolBuf);
                break;
              case "태":
                console.log("left: " + symbolBuf);
                break;
            }
          } else if (currentChar?.match(/내/)) {
            while (currentChar?.match(/[내|가|_|데]/)) {
              currentChar = this.getChar();
              symbolBuf += currentChar!!;
              if (symbolBuf?.match(/내가_데/) && symbolBuf?.length === 4) {
                console.log("print: " + symbolBuf);
              } // if
              else if (currentChar?.match(/[a-zA-Z0-9]/)) {
                break;
              } else if (symbolBuf?.length!! > 4) {
                throw Error("error: 출력 식별자의 이름이 잘못되었습니다.");
              }
            }
            this.charIndex--;
          } else if (currentChar?.match(/헤/)) {
            while (currentChar !== "응") {
              currentChar = this.getChar();
              symbolBuf += currentChar!!;
            }
            console.log(
              "curl_value: " + symbolBuf?.substring(1, symbolBuf.length - 1)
            );
          } else if (currentChar?.match(/살/)) {
          } else {
            console.log("알수없는 문자: " + symbolBuf);
          }
        } // symbol if
      }

      currentChar = this.getChar();
    }

    return this.tokenList;
  }
}

export { TokenParser };
