document.getElementById("image").addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (!file) {
    return;
  }

  const img = new Image();
  const reader = new FileReader();

  reader.addEventListener("load", (e) => {
    img.src = e.target.result;
  });

  img.addEventListener("load", () => {
    const originalCanvas = document.getElementById("original");
    const filteredCanvas = document.getElementById("filtered");
    const originalCtx = originalCanvas.getContext("2d");
    const filteredCtx = filteredCanvas.getContext("2d");

    originalCanvas.width = img.width;
    originalCanvas.height = img.height;
    filteredCanvas.width = img.width;
    filteredCanvas.height = img.height;

    originalCtx.drawImage(img, 0, 0);

    const imageData = originalCtx.getImageData(0, 0, img.width, img.height);
    const data = imageData.data;

    // グレースケールへの変換 (RGB を足して平均を取っている)
    //
    // ガウシアンフィルタを実装する場合はこの周辺のコードを変更しなさい
    // imageData の中身はそのままに別の配列に結果を格納するとよい
    // ```js
    // const outputData = new Uint8ClampedArray(imageData.data.length);
    //
    // // TODO: ここで imageData.data を参照して outputData に結果を格納
    //
    // const outputImageData = new ImageData(outputData, img.width, img.height);
    // filteredCtx.putImageData(outputImageData, 0, 0);
    // ```
    const outputData = new Uint8ClampedArray(imageData.data.length);

    // ガウシアンの重み定義
    const gaussianWeight = [
      [1, 4, 6, 4, 1],
      [4, 16, 24, 16, 4],
      [6, 24, 36, 24, 6],
      [4, 16, 24, 16, 4],
      [1, 4, 6, 4, 1],
    ];

    for (let y = 0; y < img.width; y++) {
      for (let x = 0; x < img.width; x++) {
        let r = 0;
        let g = 0;
        let b = 0;

        for (let i = 0; i < 5; i++) {
          const gy = y + i - 2;
          if (gy < 0 || gy > img.height - 1) {
            // 端はスキップ
            continue;
          }
          for (let j = 0; j < 5; j++) {
            const gx = x + i - 2;
            if (gx < 0 || gx > img.width - 1) {
              // 端はスキップ
              continue;
            }

            const pos = (y * img.width + gx) * 4;
            const weight = gaussianWeight[i][j];

            r += data[pos] * weight;
            g += data[pos + 1] * weight;
            b += data[pos + 2] * weight;
          }
        }

        const outputPos = (y * img.width + x) * 4;
        outputData[outputPos] = r / 256;
        outputData[outputPos + 1] = g / 256;
        outputData[outputPos + 2] = b / 256;
        outputData[outputPos + 3] = data[outputPos + 3];
      }
    }

    const outputImageData = new ImageData(outputData, img.width, img.height);
    filteredCtx.putImageData(outputImageData, 0, 0);
  });

  reader.readAsDataURL(file);
});
