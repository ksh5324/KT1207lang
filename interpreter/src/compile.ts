import { variableType, 경태머리 } from "./ktType";
import { literal_char } from "./Token";

export class Compile {
  code: string = "";
  variable: any = [];
  variableNum = 0;

  run(line: string): string | void {
    let result: string = "";
    let i: number = 1;

    // 변수 생성 코드
    if (line.includes(literal_char.경태)) {
      const t: string[] = line.split(" ");
      this.makeVariable(t[i++], t);
    }
    if (result == "") {
      return;
    }
    return "sdf";
  }

  // 변수 생성 함수
  makeVariable(word: string, t: string[]): void {
    this.variable[this.variableNum++] = {
      key: word,
      value: t.includes(literal_char.는)
        ? t[t.indexOf(literal_char.는) + 1]
        : 경태머리,
    };
  }
}
