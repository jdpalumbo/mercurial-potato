import { IFileReader } from "../interfaces/FileHandlers";
import * as fs from "fs";

export default class FileReader implements IFileReader {
    constructor(private fileSystem: typeof fs, private filePath: string) {
    }

    read(): string {
        return this.fileSystem.readFileSync(process.cwd() + "/" + this.filePath).toString();
    }
}