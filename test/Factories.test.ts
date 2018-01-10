import { IFileParser } from "../src/interfaces/FileHandlers";
import JsonParser from "../src/utility/JsonParser";
import { createFileParser } from "../src/Factories";


describe("createFileParser", () => {
    it("should return a json parse when the file extension is .json", () => {
        const parser: IFileParser = createFileParser("some/path/to/package.json");
        expect(parser).toBeInstanceOf(JsonParser);
    });

    it("should throw an error for unsupported file extensions ", () => {
        expect(() => {
            createFileParser("some/path/to/package.foo");
        }).toThrow();
    });
});