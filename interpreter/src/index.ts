import { 경태머리 } from "./ktType";

const testCode = `
경태 a 는 3;
내가_데 경대(a);
`;

export default function main(code: string) {
  code = code
    .split("\n")
    .map((line: string) => line.trim())
    .join("");

  const distribute = code.split(";");

  console.log(code);
  console.log(distribute);

  const outputs: string[] = [];
}

main(testCode);
