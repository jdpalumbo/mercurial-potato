import { IFileWriter } from "../interfaces/FileHandlers";
import * as fs from "fs";

export default class FileWriter implements IFileWriter {
    constructor(protected fileSystem: typeof fs, protected filePath: string) {
    }

    write(data: string): void {
        return this.fileSystem.writeFileSync(process.cwd() + "/" + this.filePath, data);
    }
}


