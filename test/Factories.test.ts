import { IFileParser } from "../src/interfaces/FileHandlers";
import JsonParser from "../src/utility/JsonParser";
import { createParser } from "../src/Factories";


describe("createParser", () => {
    it("should return a json parse when the file extension is .json", () => {
        const parser: IFileParser = createParser("some/path/to/package.json");
        expect(parser).toBeInstanceOf(JsonParser);
    });

    it("should throw an error for unsupported file extensions ", () => {
        expect(() => {
            createParser("some/path/to/package.foo");
        }).toThrow();
    });
});