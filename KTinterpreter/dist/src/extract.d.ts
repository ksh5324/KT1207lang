import { tokenDataType } from "./saveToken";
export declare class extract {
    s: string;
    type: number | null;
    text: string;
    clearToken(): void;
    nextToken(c: string, done: string): tokenDataType | number;
}
