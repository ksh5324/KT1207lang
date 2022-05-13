export class Context {
  variable: variable[] = [];
  output: string[] = [];
  block: string[] = [];
}

export type variable = {
  id: string;
  value: any;
};
