interface IFileReader {
    read(): string;
}

interface IFileParser {
    parse(): IFileParseContents;
}

interface IFileWriter {
    write(data: string): void;
}

interface IFileParseContents {
    version: string;
}

export { IFileReader, IFileParser, IFileParseContents, IFileWriter } ;
