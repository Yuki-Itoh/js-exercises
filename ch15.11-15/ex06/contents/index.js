const form = document.querySelector("#new-todo-form");
const list = document.querySelector("#todo-list");
const input = document.querySelector("#new-todo");

document.addEventListener("DOMContentLoaded", async () => {
  // TODO: ここで API を呼び出してタスク一覧を取得し、
  // 成功したら取得したタスクを appendToDoItem で ToDo リストの要素として追加しなさい
  const tasks = getTasksFromStorage();
  tasks.forEach((task) => {
    appendToDoItem(task);
  });
});

window.addEventListener("storage", () => {
  location.reload();
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

  // 新規タスク作成
  const lastId = sessionStorage.getItem("taskId") ?? "0";
  const id = parseInt(lastId) + 1;
  const task = {
    id: id,
    name: todo,
    status: "active",
  };
  appendToDoItem(task);
  addTaskToStorage(task);
  sessionStorage.setItem("taskId", id);
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
  const isActive = task.status === "active";
  toggle.checked = !isActive;
  label.style.textDecorationLine = isActive ? "none" : "line-through";
  toggle.addEventListener("change", () => {
    label.style.textDecorationLine = toggle.checked ? "line-through" : "none";
    task.status = toggle.checked ? "completed" : "active";
    patchTaskToStorage(task);
  });

  const destroy = document.createElement("button");
  // TODO: destroy がクリック (click) された場合に API を呼び出してタスク を削除し
  // 成功したら elem を削除しなさい
  destroy.textContent = "❌";
  destroy.addEventListener("click", () => {
    removeTaskFromStorage(task);
    elem.remove();
  });

  // TODO: elem 内に toggle, label, destroy を追加しなさい
  elem.appendChild(toggle);
  elem.appendChild(label);
  elem.appendChild(destroy);
  list.prepend(elem);
}

function addTaskToStorage(task) {
  const tasks = getTasksFromStorage();
  tasks.push(task);
  setTasksToStorage(tasks);
}

function removeTaskFromStorage(task) {
  const tasks = getTasksFromStorage();
  const removed = tasks.filter((t) => {
    return t.id !== task.id;
  });

  setTasksToStorage(removed);
}

function patchTaskToStorage(task) {
  const tasks = getTasksFromStorage();
  const removed = tasks.filter((t) => {
    return t.id !== task.id;
  });
  removed.push(task);

  setTasksToStorage(removed);
}

function getTasksFromStorage() {
  const items = sessionStorage.getItem("items");
  if (items === null) {
    return [];
  } else {
    return JSON.parse(items).tasks;
  }
}

function setTasksToStorage(tasks) {
  sessionStorage.setItem("items", JSON.stringify({ tasks: tasks }));
}
