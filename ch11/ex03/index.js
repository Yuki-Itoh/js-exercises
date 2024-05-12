export function toBigEndian(littleEndian) {
  return convertEndian(littleEndian);
}

export function toLittleEndian(bigEndian) {
  return convertEndian(bigEndian);
}

function convertEndian(uint32Array) {
  const converted = new Uint32Array(uint32Array.length);

  for (let i = 0; i < uint32Array.length; i++) {
    converted[i] = uint32Array[uint32Array.length - 1 - i];
  }

  return converted;
}
