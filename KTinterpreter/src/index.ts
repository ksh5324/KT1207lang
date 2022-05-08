import { Context } from "./context";
import { parser } from "./parser";

const testCode = `
경태kk 는 345 "hggjsdf""sldfj"; 
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
