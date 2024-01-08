import { convertCRLFtoLF, convertLFtoCRLF } from "./index.js";

describe("convert new line code", () => {
    describe("", () => {
        it("", () => {
            const textLF = "Hello,\nWorld"
            const textCRLF = "Hello,\r\nWorld"
            console.log(textLF);
            console.log(textCRLF);

            expect(convertLFtoCRLF(textLF)).toEqual(textCRLF);
            expect(convertCRLFtoLF(textCRLF)).toEqual(textLF);
            expect(convertCRLFtoLF(convertLFtoCRLF(textLF))).toEqual(textLF);
        });
    });
});