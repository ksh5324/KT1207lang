import { Analyse } from "./analyse";
import { Context } from "./context";
import { curl, getAllIndexes } from "./ParserMethod";
import { TokenParser } from "./TokenParser";

let code = `
    경태aa는3;
    경태g는aa귀1;

    내가_데g"나는야"aa"경 태"123;

    헤
     경태b는7;
     경태c는2;
     경태d는8;
     경태e는1;
     내가_데b귀c귀d여e;
    응;
`;

code = code
  .split("\n")
  .map((line: string) => line.trim())
  .join("");

// console.log(code);

const context = new Context();

let distribute = code.split(";");
let start: number[] = getAllIndexes(distribute, "헤");
let end: number[] = getAllIndexes(distribute, "응");
distribute = curl(start, end, distribute);

// console.log(distribute);

distribute.forEach((v) => {
  const parser = new TokenParser(v);
  const object = parser.parseAndGetTokens();
  // console.log(object);

  const analyse = new Analyse(object, context);
  const middle = analyse.tokenResult();

  context.variable = middle.variable;
  context.output = middle.output;

  // console.log(context);
});

context.output.forEach((v) => {
  console.log(v);
});
