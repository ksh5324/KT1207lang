export declare class Compile {
    code: string;
    variable: any;
    variableNum: number;
    run(line: string): string | void;
    makeVariable(word: string, t: string[]): void;
}
