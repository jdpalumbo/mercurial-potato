interface IFileReader {
    read(): string;
}

interface IFileParser {
    parse(): IFileParseContents;
}

interface IFileParseContents {
    version: string;
}

export { IFileReader, IFileParser, IFileParseContents } ;
