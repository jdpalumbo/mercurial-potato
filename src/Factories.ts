import * as fs from "fs";
import { IFileParser } from "./interfaces/FileHandlers";
import JsonParser from "./utility/JsonParser";
import FileReader from "./utility/FileReader";
import { NodeVersionUpdateStrategy } from "./updaters/NodeVersionUpdateStrategy";
import { ProjectType, ProjectTypes } from "./Types";
import { Strategy } from "./intefaces/Strategy";

export function createFileParser(filePath: string): IFileParser {
    const extension: string = filePath.match(/(?:\.([^.]+))?$/)[1];
    switch (extension) {
        case "json":
            return new JsonParser(new FileReader(fs, filePath));
        default:
            throw new Error(`Unsupported file extension ${extension}`);
    }
}

export function createUpdateStrategy(type: ProjectType, version: string): Strategy {
    switch (type) {
        case ProjectTypes.Node:
            return new NodeVersionUpdateStrategy(version);
        default:
            throw new Error(`Unsupported project type ${type}`);
    }
}


