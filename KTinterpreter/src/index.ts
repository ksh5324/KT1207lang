import { parser } from "./parser";

const testCode = `
sdfge sms;
`;

export default function main(code: string) {
  code = code
    .split("\n")
    .map((line: string) => line.trim())
    .join("");

  const distribute = code.split(";");

  distribute.forEach((v) => {
    console.log(parser(v));
  });
}

main(testCode);
