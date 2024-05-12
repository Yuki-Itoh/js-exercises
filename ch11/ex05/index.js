const fileSignatures = [
  { type: "PDF", signature: new Uint8Array([0x25, 0x50, 0x44, 0x46, 0x2d]) },
  { type: "ZIP", signature: new Uint8Array([0x50, 0x4b, 0x03, 0x04]) },
  { type: "ZIP", signature: new Uint8Array([0x50, 0x4b, 0x05, 0x06]) },
  { type: "ZIP", signature: new Uint8Array([0x50, 0x4b, 0x07, 0x08]) },
  {
    type: "GIF",
    signature: new Uint8Array([0x47, 0x49, 0x46, 0x38, 0x37, 0x61]),
  },
  {
    type: "GIF",
    signature: new Uint8Array([0x47, 0x49, 0x46, 0x38, 0x39, 0x61]),
  },
  {
    type: "PNG",
    signature: new Uint8Array([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
  },
];

export function detectFileType(arrayBuffer) {
  const array = new Uint8Array(arrayBuffer);

  const fileSignature = fileSignatures.find((fs) => {
    return fs.signature.every((value, index, _) => value === array[index]);
  });

  return fileSignature?.type ?? "UNKNOWN";
}
