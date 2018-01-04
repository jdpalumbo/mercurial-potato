import { IFileParseContents, IFileParser, IFileReader } from "../interfaces/FileHandlers";

export default class JsonParser implements IFileParser {
    constructor(private fileReader: IFileReader) { }
    parse(): IFileParseContents {
       return JSON.parse(this.fileReader.read());
    }
}