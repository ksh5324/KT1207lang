import { Analyse } from "./analyse";
import { Context } from "./context";
import { curl, getAllIndexes } from "./ParserMethod";
import { TokenParser } from "./TokenParser";

let code = `
    경태a는3;
    경태g는a귀1;

    내가_데g"sdf"a"3fe"3;
`;

code = code
  .split("\n")
  .map((line: string) => line.trim())
  .join("");

const context = new Context();

let distribute = code.split(";");
let start: number[] = getAllIndexes(distribute, "헤");
let end: number[] = getAllIndexes(distribute, "응");
distribute = curl(start, end, distribute);

distribute.forEach((v) => {
  const parser = new TokenParser(v);
  const object = parser.parseAndGetTokens();

  const analyse = new Analyse(object, context);
  const middle = analyse.tokenResult();

  context.variable = middle.variable;
  context.output = middle.output;
  // console.log(context);
});

context.output.forEach((v) => {
  console.log(v);
});
