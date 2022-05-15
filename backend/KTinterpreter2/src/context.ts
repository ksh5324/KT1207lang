export class Context {
  variable: variable[] = [];
  output: string[] = [];
}

export type variable = {
  id: string;
  value: any;
};
