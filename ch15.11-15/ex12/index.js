const form = document.querySelector("#token-form");
const input = document.querySelector("#token");
const file = document.getElementById("file");

file.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) {
    return;
  }

  const img = new Image();
  const reader = new FileReader();

  reader.addEventListener("load", (e) => {
    console.log("reader load");
    img.src = e.target.result;
  });

  img.addEventListener("load", () => {
    console.log("img load");
    const previewCanvas = document.querySelector("#preview");
    const previewCtx = previewCanvas.getContext("2d");

    previewCanvas.width = img.width;
    previewCanvas.height = img.height;

    previewCtx.drawImage(img, 0, 0);
  });

  reader.readAsDataURL(file);
});

form.addEventListener("submit", (e) => {
  // TODO: ここで form のイベントのキャンセルを実施しなさい (なぜでしょう？)
  // ブラウザの更新によるリセットを防ぐため
  e.preventDefault();

  // 両端からホワイトスペースを取り除いた文字列を取得する
  const token = input.value.trim();
  if (token === "") {
    return;
  }

  const targetFile = file.files[0];
  console.log("file=", targetFile);

  // TODO: ここで API を呼び出して新しいタスクを作成し
  // 成功したら作成したタスクを appendToDoElement で ToDo リストの要素として追加しなさい
  fetch(
    "https://graph.microsoft.com/v1.0/me/drive/items/root:/js-training.txt:/content",
    {
      method: "PUT",
      body: "",
    }
  ).then((response) => {
    if (
      response.ok &&
      response.headers.get("Content-Type") === "application/json; charset=UTF-8"
    ) {
      return response.json();
    } else {
      alert(`Error: ${response.status} ${response.statusText}`);
    }
  });
});
