import { convertCRLFtoLF, convertLFtoCRLF } from "./index.js";

test("convert new line code", () => {
    const textLF = "Hello,\nWorld"
    const textCRLF = "Hello,\r\nWorld"
    console.log(textLF);
    console.log(textCRLF);

    expect(convertLFtoCRLF(textLF)).toEqual(textCRLF);
    expect(convertCRLFtoLF(textCRLF)).toEqual(textLF);
    expect(convertCRLFtoLF(convertLFtoCRLF(textLF))).toEqual(textLF);
});