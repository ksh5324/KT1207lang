import { curl, getAllIndexes } from "./ParserMethod";
import { TokenParser } from "./TokenParser";

let code = `
    "wow I love it!"dfads경경ss경e경태js는efjlsej경태dljk귀귀여운귀여운귀여여운귀여운내가_데323.234경태;
    헤
      경태34ekll;
      dfjsdjflksl;
      dfjsei;
    응;
    헤
      경태34ekll;
      dfjsdjflksl;
      dfjsei;
    응;
`;

code = code
  .split("\n")
  .map((line: string) => line.trim())
  .join("");

let distribute = code.split(";");
let start: number[] = getAllIndexes(distribute, "헤");
let end: number[] = getAllIndexes(distribute, "응");
distribute = curl(start, end, distribute);

distribute.forEach((v) => {
  const parser = new TokenParser(v);
  const object = parser.parseAndGetTokens();
  console.log(object);
  console.log("-------------------------------------------------------");
});
