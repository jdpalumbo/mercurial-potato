import * as fs from "fs";
import { IFileParser } from "./interfaces/FileHandlers";
import JsonParser from "./utility/JsonParser";
import FileReader from "./utility/FileReader";

export function createParser(filePath: string): IFileParser {
    const extension: string = filePath.match(/(?:\.([^.]+))?$/)[1];
    switch (extension) {
        case "json":
            return new JsonParser(new FileReader(fs, filePath));
        default:
            throw new Error(`Unsupported filed extention ${extension}`);
    }
}


