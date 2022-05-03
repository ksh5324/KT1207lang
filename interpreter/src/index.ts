import { Compile } from "./compile";

const testCode = `
경태 a 는 3;
경태 c 는 "sdf";
경태 b 는 3.14;
경태 g 는 true;
경태 k;

내가_데 "이경태" a;
내가_데 g;
내가_데 "sdf" b "fds";

g 는 a 찍 b;

내가_데 g;
내가_데 k;
`;

const testCodeV2 = `
내가_데 3 깜 5;
`;

export default function main(code: string) {
  code = code
    .split("\n")
    .map((line: string) => line.trim())
    .join("");

  const distribute = code.split(";");

  const compile = new Compile();
  const outputs: string[] = [];

  distribute.forEach((v: string) => {
    const line: string | void | number = compile.run(v);
    if (typeof line === "string") {
      outputs.push(line);
    }
  });

  //   console.log(outputs);
  //   console.log(compile.variable);
}

main(testCode);
