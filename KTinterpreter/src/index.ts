import { Context } from "./context";
import { parser } from "./parser";

const testCode = `
경태k;
`;

export default function main(code: string) {
  code = code
    .split("\n")
    .map((line: string) => line.trim())
    .join("");

  const context = new Context();

  const distribute = code.split(";");

  distribute.forEach((v) => {
    console.log(parser(v));
    // analysis();
    // print();
  });
}

main(testCode);
