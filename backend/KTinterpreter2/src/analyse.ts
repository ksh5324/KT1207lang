import { Context, variable } from "./context";
import { variableIncludes } from "./ParserMethod";
import { TokenParser } from "./TokenParser";

export class Analyse {
  tokenIndex = 0;
  tokenList: tokenList_Type[] = [];
  currentToken: tokenList_Type | null = null;

  context: Context;

  variable: variable[] = [];
  output: string[] = [];
  bool: boolean = false;

  constructor(tokenList: tokenList_Type[], context: Context) {
    this.tokenList = tokenList;
    this.variable = context.variable;
    this.output = context.output;
    this.context = context;
  }

  getNextToken() {
    this.currentToken = this.tokenList[this.tokenIndex];
    this.tokenIndex++;
  }

  tokenResult() {
    while (this.tokenIndex <= this.tokenList.length - 1) {
      this.tokenResultSave();
    }
    return {
      variable: this.variable,
      output: this.output,
      bool: this.bool,
    };
  }

  tokenResultSave() {
    this.getNextToken();

    if (this.currentToken?.type === 2) {
      if (this.tokenList[this.tokenIndex].type !== 1) {
        throw Error("잘못된 변수 이름");
      }

      this.getNextToken();

      if (variableIncludes(this.currentToken.value, this.variable)) {
        this.variable.push({
          id: this.currentToken.value,
          value: null,
        });
      } else {
        throw Error(this.currentToken.value + "는 이미 선언된 변수입니다.");
      }
    }

    if (this.currentToken?.type === 3) {
      if (this.tokenList[this.tokenIndex - 2].type === 1) {
        if (
          !variableIncludes(
            this.tokenList[this.tokenIndex - 2].value,
            this.variable
          )
        ) {
          const change = this.variable.findIndex(
            (v) => v.id === this.tokenList[this.tokenIndex - 2].value
          );
          this.variable[change].value = this.getValue();
        } else {
          throw Error(this.currentToken.value + "는 이미 선언된 변수입니다.");
        }
      }
    }
    if (this.currentToken?.type === 6) {
      this.output.push(this.getStringValue());
    }

    if (this.currentToken?.type === 17) {
      this.bool = this.getBool();
    }

    if (this.currentToken?.type === 22) {
      if (this.tokenList[this.tokenIndex].type === 23) {
        const parser = new TokenParser(this.tokenList[this.tokenIndex].value);
        const object: tokenList_Type[] = parser.parseAndGetTokens();

        const analyse2 = new Analyse(object, this.context);
        const middle2 = analyse2.tokenResult();

        this.bool = middle2.bool;
      } else {
        throw Error("조건이 잘못됨");
      }
    }

    if (this.currentToken?.type === 12 && this.bool) {
      let distribute = this.currentToken.value.split(";");
      distribute.pop();
      // console.log(distribute);
      distribute.forEach((v: any) => {
        const parser = new TokenParser(v);
        const object: tokenList_Type[] = parser.parseAndGetTokens();

        const analyse2 = new Analyse(object, this.context);
        const middle2 = analyse2.tokenResult();

        this.context.variable = middle2.variable;
        this.context.output = middle2.output;
      });
    }
  }

  getValue() {
    const operatorToken: tokenList_Type[] = [];
    let operatorTokenIndex: number = 0;
    let middleValue: string = "";
    while (this.tokenIndex <= this.tokenList.length - 1) {
      this.getNextToken();
      operatorToken.push(this.currentToken!!);
    }
    while (operatorTokenIndex <= operatorToken.length - 1) {
      if (operatorToken[operatorTokenIndex].type === 1) {
        const change = this.variable.findIndex(
          (v) => v.id === operatorToken[operatorTokenIndex].value
        );
        middleValue = middleValue.concat("" + this.variable[change].value);
      } else if (operatorToken[operatorTokenIndex].type === 4) {
        middleValue = middleValue.concat(
          "" + operatorToken[operatorTokenIndex].value
        );
      } else if (operatorToken[operatorTokenIndex].type === 7) {
        middleValue = middleValue.concat("+");
      } else if (operatorToken[operatorTokenIndex].type === 8) {
        middleValue = middleValue.concat("-");
      } else if (operatorToken[operatorTokenIndex].type === 9) {
        middleValue = middleValue.concat("*");
      } else if (operatorToken[operatorTokenIndex].type === 10) {
        middleValue = middleValue.concat("/");
      } else if (operatorToken[operatorTokenIndex].type === 11) {
        middleValue = middleValue.concat("%");
      } else {
        throw Error("잘못된 식입니다");
      }
      operatorTokenIndex++;
    }
    return eval(middleValue);
  }

  getStringValue() {
    const operatorToken: tokenList_Type[] = [];
    let operatorTokenIndex: number = 0;
    let middleValue: string = "";
    let resultValue: string = "";
    while (this.tokenIndex <= this.tokenList.length - 1) {
      this.getNextToken();
      operatorToken.push(this.currentToken!!);
    }
    while (operatorTokenIndex <= operatorToken.length - 1) {
      if (operatorToken[operatorTokenIndex].type === 1) {
        const change = this.variable.findIndex(
          (v) => v.id === operatorToken[operatorTokenIndex].value
        );
        middleValue = middleValue.concat("" + this.variable[change].value);
      } else if (operatorToken[operatorTokenIndex].type === 4) {
        middleValue = middleValue.concat(
          "" + operatorToken[operatorTokenIndex].value
        );
      } else if (operatorToken[operatorTokenIndex].type === 7) {
        middleValue = middleValue.concat("+");
      } else if (operatorToken[operatorTokenIndex].type === 8) {
        middleValue = middleValue.concat("-");
      } else if (operatorToken[operatorTokenIndex].type === 9) {
        middleValue = middleValue.concat("*");
      } else if (operatorToken[operatorTokenIndex].type === 10) {
        middleValue = middleValue.concat("/");
      } else if (operatorToken[operatorTokenIndex].type === 11) {
        middleValue = middleValue.concat("%");
      } else if (operatorToken[operatorTokenIndex].type === 5) {
        resultValue = resultValue.concat(
          eval(middleValue) + operatorToken[operatorTokenIndex].value
        );
        middleValue = "";
      } else {
        throw Error("잘못된 식입니다");
      }
      operatorTokenIndex++;
    }
    resultValue = resultValue.concat(eval(middleValue));
    return resultValue;
  }

  getBool() {
    const operatorToken: tokenList_Type[] = [];
    let operatorTokenIndex: number = 0;
    let middleValue: string = "";
    while (this.tokenIndex <= this.tokenList.length - 1) {
      this.getNextToken();
    }
    for (let i = 0; i <= this.tokenList.length - 1; i++) {
      operatorToken.push(this.tokenList[i]!!);
    }
    while (operatorTokenIndex <= operatorToken.length - 1) {
      if (operatorToken[operatorTokenIndex].type === 1) {
        const change = this.variable.findIndex(
          (v) => v.id === operatorToken[operatorTokenIndex].value
        );
        middleValue = middleValue.concat("" + this.variable[change].value);
      } else if (operatorToken[operatorTokenIndex].type === 4) {
        middleValue = middleValue.concat(
          "" + operatorToken[operatorTokenIndex].value
        );
      } else if (operatorToken[operatorTokenIndex].type === 17) {
        middleValue = middleValue.concat(">");
      } else if (operatorToken[operatorTokenIndex].type === 18) {
        middleValue = middleValue.concat(">=");
      } else if (operatorToken[operatorTokenIndex].type === 19) {
        middleValue = middleValue.concat("<");
      } else if (operatorToken[operatorTokenIndex].type === 20) {
        middleValue = middleValue.concat("<=");
      } else if (operatorToken[operatorTokenIndex].type === 21) {
        middleValue = middleValue.concat("=");
      } else {
        throw Error("잘못된 식입니다");
      }
      operatorTokenIndex++;
    }
    return eval(middleValue);
  }
}

export type tokenList_Type = {
  type: number;
  value: any;
};
