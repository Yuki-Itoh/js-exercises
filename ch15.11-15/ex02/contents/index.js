const form = document.querySelector("#new-todo-form");
const list = document.querySelector("#todo-list");
const input = document.querySelector("#new-todo");

document.addEventListener("DOMContentLoaded", async () => {
  // TODO: ここで API を呼び出してタスク一覧を取得し、
  // 成功したら取得したタスクを appendToDoItem で ToDo リストの要素として追加しなさい
  setPointerEvents(false);
  retryWithExponentialBackoff(
    () => fetchWithTimeout("http://localhost:3000/api/tasks"),
    10,
    (response) => {
      setPointerEvents(true);

      if (
        response.ok &&
        response.headers.get("Content-Type") ===
          "application/json; charset=UTF-8"
      ) {
        response.json().then((jsonObj) => {
          const tasks = jsonObj.items;
          tasks.forEach((task) => {
            appendToDoItem(task);
          });
        });
      } else {
        alert(`Server Error: ${response.status} ${response.statusText}`);
      }
    }
  );
});

form.addEventListener("submit", (e) => {
  // TODO: ここで form のイベントのキャンセルを実施しなさい (なぜでしょう？)
  // ブラウザの更新によるリセットを防ぐため
  e.preventDefault();

  // 両端からホワイトスペースを取り除いた文字列を取得する
  const todo = input.value.trim();
  if (todo === "") {
    return;
  }

  // new-todo の中身は空にする
  input.value = "";

  // TODO: ここで API を呼び出して新しいタスクを作成し
  // 成功したら作成したタスクを appendToDoElement で ToDo リストの要素として追加しなさい
  setPointerEvents(false);
  retryWithExponentialBackoff(
    () =>
      fetchWithTimeout("http://localhost:3000/api/tasks", {
        method: "POST",
        body: JSON.stringify({ name: todo }),
      }),
    10,
    (response) => {
      setPointerEvents(true);

      if (
        response.ok &&
        response.headers.get("Content-Type") ===
          "application/json; charset=UTF-8"
      ) {
        response.json().then((jsonObj) => appendToDoItem(jsonObj));
      } else {
        alert(`Server Error: ${response.status} ${response.statusText}`);
      }
    }
  );
});

// API から取得したタスクオブジェクトを受け取って、ToDo リストの要素を追加する
function appendToDoItem(task) {
  // ここから #todo-list に追加する要素を構築する
  const elem = document.createElement("li");

  const label = document.createElement("label");
  label.textContent = task.name;
  label.style.textDecorationLine = "none";

  const toggle = document.createElement("input");
  // TODO: toggle が変化 (change) した際に API を呼び出してタスクの状態を更新し
  // 成功したら label.style.textDecorationLine を変更しなさい
  toggle.setAttribute("type", "checkbox");
  toggle.addEventListener("change", () => {
    label.style.textDecorationLine = toggle.checked ? "line-through" : "none";
  });

  const destroy = document.createElement("button");
  // TODO: destroy がクリック (click) された場合に API を呼び出してタスク を削除し
  // 成功したら elem を削除しなさい
  destroy.textContent = "❌";
  destroy.addEventListener("click", () => {
    setPointerEvents(false);
    retryWithExponentialBackoff(
      () =>
        fetchWithTimeout(`http://localhost:3000/api/tasks/${task.id}`, {
          method: "DELETE",
        }),
      10,
      (response) => {
        setPointerEvents(true);
        if (response.ok) {
          elem.remove();
        } else {
          alert(`Server Error: ${response.status} ${response.statusText}`);
        }
      }
    );
  });

  // TODO: elem 内に toggle, label, destroy を追加しなさい
  elem.appendChild(toggle);
  elem.appendChild(label);
  elem.appendChild(destroy);
  list.prepend(elem);
}

export function retryWithExponentialBackoff(func, maxRetry, callback) {
  let retryCount = 0;

  const retry = (timeout) => {
    setTimeout(async () => {
      const response = await func();
      if (response.status !== 500) {
        return callback(response);
      }

      if (++retryCount > maxRetry) {
        return callback(response);
      }

      if (retryCount === 1) {
        retry(1000);
      } else {
        retry(timeout * 2);
      }
    }, timeout);
  };

  retry(0);
}

function fetchWithTimeout(url, options = {}) {
  const controller = new AbortController();
  options.signal = controller.signal;
  const timeoutId = setTimeout(() => {
    controller.abort(null);
    alert(`Server timeout.`);
  }, 3000);

  return fetch(url, options)
    .then((response) => {
      clearTimeout(timeoutId);
      return response;
    })
    .catch(() => setPointerEvents(true));
}

function setPointerEvents(bool) {
  console.log("setPointerEvent:", bool);
  form.style.pointerEvents = bool ? "auto" : "none";
  list.style.pointerEvents = bool ? "auto" : "none";
  input.style.pointerEvents = bool ? "auto" : "none";
}
