import { variable } from "./context";

export function getAllIndexes(arr: string[], val: string): Array<number> {
  var indexes: number[] = [];
  arr.forEach((v: string, i: number) => {
    if (v.includes(val)) {
      indexes.push(i);
    }
  });
  return indexes;
}

export function curl(start: number[], end: number[], distribute: string[]) {
  for (let k = 0; k < start.length; k++) {
    let s: number = start[k];
    let e: number = end[k];

    let str: string = "";
    for (let p = s; p <= e; p++) {
      str += distribute[p] + (p !== e ? ";" : "");
      distribute[p] = "";
    }
    distribute[s] = str;
    str = "";
  }

  return (distribute = distribute.filter((v) => v !== ""));
}

export const variableIncludes = (id: string, variable: variable[]): boolean => {
  const bool = variable.find((v) => v.id === id);
  return bool ? false : true;
};
