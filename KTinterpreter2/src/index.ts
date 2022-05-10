import { TokenParser } from "./TokenParser";

let code = `
    const code ="wow I love it!"dfads
`;

code = code
  .split("\n")
  .map((line: string) => line.trim())
  .join("");

const parser = new TokenParser(code);
parser.parseAndGetTokens();
