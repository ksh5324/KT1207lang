import { tokenDataType } from "./saveToken";
export declare class extract {
    s: string;
    current: string;
    type: number;
    text: string;
    clearToken(): void;
    nextToken(c: string, done: string): tokenDataType | number;
}
