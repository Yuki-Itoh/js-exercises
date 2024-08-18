const template = document.createElement("template");
template.innerHTML = `\
<style>
.completed {
  text-decoration: line-through;
}
</style>

<form id="new-todo-form">
  <input type="text" id="new-todo" placeholder="What needs to be done?" />
  <button>Add</button>
</form>
<ul id="todo-list"></ul>
`;

class TodoApp extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.form = this.shadowRoot.querySelector("#new-todo-form");
    this.list = this.shadowRoot.querySelector("#todo-list");
    this.input = this.shadowRoot.querySelector("#new-todo");

    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (this.input.value.trim() === "") {
        return;
      }
      const todo = this.input.value.trim();
      this.input.value = "";

      const li = document.createElement("li");
      const div = document.createElement("div");
      const toggle = document.createElement("input");
      toggle.type = "checkbox";
      const label = document.createElement("label");
      const destroy = document.createElement("button");
      destroy.textContent = "❌";

      div.append(toggle, label, destroy);
      li.append(div);
      this.list.append(li);

      toggle.addEventListener("change", () => {
        li.classList.toggle("completed", toggle.checked);
      });
      label.textContent = todo;
      destroy.addEventListener("click", () => {
        li.remove();
      });

      this.list.prepend(li);
    });
  }
}

customElements.define("todo-app", TodoApp);
