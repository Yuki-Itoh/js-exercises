onmessage = (ev) => {
  console.log("worker: ", ev);
  const data = ev.data.data;
  const height = ev.data.height;
  const width = ev.data.width;

  const outputData = new Uint8ClampedArray(data.length);

  // ガウシアンの重み定義
  const gaussianWeight = [
    [1, 4, 6, 4, 1],
    [4, 16, 24, 16, 4],
    [6, 24, 36, 24, 6],
    [4, 16, 24, 16, 4],
    [1, 4, 6, 4, 1],
  ];

  for (let y = 0; y < width; y++) {
    for (let x = 0; x < width; x++) {
      let r = 0;
      let g = 0;
      let b = 0;

      for (let i = 0; i < 5; i++) {
        const gy = y + i - 2;
        if (gy < 0 || gy > height - 1) {
          // 端はスキップ
          continue;
        }
        for (let j = 0; j < 5; j++) {
          const gx = x + i - 2;
          if (gx < 0 || gx > width - 1) {
            // 端はスキップ
            continue;
          }

          const pos = (y * width + gx) * 4;
          const weight = gaussianWeight[i][j];

          r += data[pos] * weight;
          g += data[pos + 1] * weight;
          b += data[pos + 2] * weight;
        }
      }

      const outputPos = (y * width + x) * 4;
      outputData[outputPos] = r / 256;
      outputData[outputPos + 1] = g / 256;
      outputData[outputPos + 2] = b / 256;
      outputData[outputPos + 3] = data[outputPos + 3];
    }
  }

  postMessage(outputData);
};
