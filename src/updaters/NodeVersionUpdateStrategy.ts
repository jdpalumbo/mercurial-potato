import { Strategy } from "../intefaces/Strategy";
import * as fs from "fs";
import { createFileParser } from "../Factories";
import FileWriter from "../utility/FileWriter";

export class NodeVersionUpdateStrategy implements Strategy {
    constructor(private version: string) {
    }

    execute(): void {
        this.updatePackageFile();
        this.updateShrinkwrap();
        this.updatePackageLock();
    }

    private updatePackageFile() {
        this.updateFileVersion("package.json");
    }

    private updateShrinkwrap() {
        const fileName = "npm-shrinkwrap.json";
        if (fs.existsSync(fileName)) {
            this.updateFileVersion(fileName);
        }
    }

    private updatePackageLock() {
        const fileName = "package-lock.json";
        if (fs.existsSync(fileName)) {
            this.updateFileVersion(fileName);
        }
    }

    private updateFileVersion(fileName: string) {
        const contents = createFileParser(fileName).parse();
        contents.version = this.version;
        const writer = new FileWriter(fs, fileName);
        writer.write(JSON.stringify(contents, undefined, 2));
    }
}