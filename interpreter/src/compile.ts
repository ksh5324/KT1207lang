import { variableType, 경태머리 } from "./ktType";
import { inputOutput, literal_char } from "./Token";

export class Compile {
  code: string = "";
  variable: any = [];
  variableNum = 0;

  run(line: string): string | void {
    let result: string = "";
    // let i: number = 1;
    const t: string[] = line.split(" ");

    // 변수 생성 코드
    if (line.includes(literal_char.경태)) {
      this.makeVariable(t[t.indexOf(literal_char.경태) + 1]);
    }

    // 대입 코드
    if (line.includes(literal_char.는)) {
      this.substitute(t);
    }

    // 출력 코드
    if (line.includes(inputOutput.내가_데)) {
      this.printValue(t);
    }

    if (result == "") {
      return;
    }
    return "sdf";
  }

  // 변수 생성 함수
  makeVariable(word: string): void {
    this.variable[this.variableNum++] = {
      key: word,
      value: 경태머리,
    };
  }

  // 대입 함수
  substitute(t: string[]): void {
    let r = this.variable.find(
      (v: any) => v.key === t[t.indexOf(literal_char.는) - 1]
    );
    r.value = t[t.indexOf(literal_char.는) + 1];
  }

  // 출력 함수
  printValue(t: string[]): void {
    if (t[t.indexOf(inputOutput.내가_데) + 1].includes('"')) {
      let r = this.variable.find(
        (v: any, index: number) =>
          v.key === t[t.indexOf(inputOutput.내가_데) + 2]
      );
      console.log(
        t[t.indexOf(inputOutput.내가_데) + 1].slice(1, -1) +
          " " +
          r.value +
          (t[t.indexOf(inputOutput.내가_데) + 3] !== undefined
            ? " " + t[t.indexOf(inputOutput.내가_데) + 3]?.slice(1, -1)
            : "")
      );
    } else {
      let r = this.variable.find(
        (v: any) => v.key === t[t.indexOf(inputOutput.내가_데) + 1]
      );
      console.log(
        r.value +
          (t[t.indexOf(inputOutput.내가_데) + 3] !== undefined
            ? " " + t[t.indexOf(inputOutput.내가_데) + 3]?.slice(1, -1)
            : "")
      );
    }
  }
}
