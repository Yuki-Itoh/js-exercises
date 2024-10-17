document.getElementById("image").addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (!file) {
    return;
  }

  const img = new Image();
  const reader = new FileReader();
  // ガウシアンフィルタを適用するWorker
  const worker = new Worker("./worker.js");

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

    worker.postMessage({ data: data, height: img.height, width: img.width });
    worker.onmessage = (ev) => {
      const outputImageData = new ImageData(ev.data, img.width, img.height);
      filteredCtx.putImageData(outputImageData, 0, 0);
    };
  });

  reader.readAsDataURL(file);
});
