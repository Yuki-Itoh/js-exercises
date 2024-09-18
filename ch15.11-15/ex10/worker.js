self.addEventListener("message", (e) => {
  const imageData = e.data;

  const outputData = new Uint8ClampedArray(imageData.data.length);

  // ガウシアンの重み定義
  const gaussianWeight = [
    [1, 4, 6, 4, 1],
    [4, 16, 24, 16, 4],
    [6, 24, 36, 24, 6],
    [4, 16, 24, 16, 4],
    [1, 4, 6, 4, 1],
  ];

  for (let y = 0; y < imageData.width; y++) {
    for (let x = 0; x < imageData.width; x++) {
      let r = 0;
      let g = 0;
      let b = 0;

      for (let i = 0; i < 5; i++) {
        const gy = y + i - 2;
        if (gy < 0 || gy > imageData.height - 1) {
          // 端はスキップ
          continue;
        }
        for (let j = 0; j < 5; j++) {
          const gx = x + i - 2;
          if (gx < 0 || gx > imageData.width - 1) {
            // 端はスキップ
            continue;
          }

          const pos = (y * imageData.width + gx) * 4;
          const weight = gaussianWeight[i][j];

          r += imageData.data[pos] * weight;
          g += imageData.data[pos + 1] * weight;
          b += imageData.data[pos + 2] * weight;
        }
      }

      const outputPos = (y * imageData.width + x) * 4;
      outputData[outputPos] = r / 256;
      outputData[outputPos + 1] = g / 256;
      outputData[outputPos + 2] = b / 256;
      outputData[outputPos + 3] = imageData.data[outputPos + 3];
    }
  }

  const outputImageData = new ImageData(
    outputData,
    imageData.width,
    imageData.height
  );

  self.postMessage(outputImageData);
});
