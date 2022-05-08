import { extract } from "./extract";

export const parser = (v: string): any[] => {
  const extractToken = new extract();
  let i = 0;
  const tokenZip: any[] = [];
  let p: object | number = 0;
  for (; v[i]; i++) {
    if (v[i + 1] == null) {
      p = extractToken.nextToken(v[i], "done");
    } else {
      p = extractToken.nextToken(v[i], "");
    }
    if (typeof p !== "number") {
      tokenZip.push(p);
      extractToken.clearToken();
    }
  }
  return tokenZip;
};
