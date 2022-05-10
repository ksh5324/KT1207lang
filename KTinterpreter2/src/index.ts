import { TokenParser } from "./TokenParser";

let code = `
    "wow I love it!"dfads경경ss경e경태js는efjlsej 경ㄱ경태dljk귀여운내가_데3;
`;

code = code
  .split("\n")
  .map((line: string) => line.trim())
  .join("");

const distribute = code.split(";");

distribute.forEach((v) => {
  console.log("-------------------------------------------------------");
  const parser = new TokenParser(v);
  parser.parseAndGetTokens();
});
