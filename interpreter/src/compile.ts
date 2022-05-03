import { variableType } from "./ktType";

export class Compile {
  code: string = "";
  variable: {} = {};
  constructor(str: string) {
    this.code = str;
  }
}
