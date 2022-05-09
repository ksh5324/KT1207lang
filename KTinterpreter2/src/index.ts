import { TokenParser } from "./TokenParser";

const code = `
    const code = "wow I love it!" dfads
`;

const parser = new TokenParser(code);
parser.parseAndGetTokens();
