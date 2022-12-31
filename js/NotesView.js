export default class NotesView {
  constructor(root, handlers) {
    this.root = root;

    const { onNoteAdd, onNoteEdit } = handlers;
    this.onNoteAdd = onNoteAdd;
    this.onNoteEdit = onNoteEdit;
    // add root innerHTML
    this.root.innerHTML = `
    <div class="notes__sidebar">
        <div class="notes__logo">NOTE APP</div>
        <div class="notes__list"></div>
        <button class="notes__add">Add Note</button>
      </div>
      <div class="notes__preview">
        <input type="text" class="notes__title" placeholder="Note Title" />
        <textarea class="notes__body" placeholder="Take Some Note"></textarea>
      </div>
    `;
    // get HTML tags from DOM
    const addNoteBtn = this.root.querySelector(".notes__add");
    const inputTitle = this.root.querySelector(".notes__title");
    const inputBody = this.root.querySelector(".notes__body");
    // event listeners
    addNoteBtn.addEventListener("click", () => {
      // run addNote method
      this.onNoteAdd();
    });

    [inputBody, inputTitle].forEach((inputField) => {
      inputField.addEventListener("blur", () => {
        const newBody = inputBody.value.trim();
        const newTitle = inputTitle.value.trim();

        this.onNoteEdit(newTitle, newBody);
      });
    });
  }

  #createListItemHTML(id, title, body, updated) {
    const MAX_BODY_LENGTH = 50;

    return `
    <div class="notes__list-item" data-node-id="${id}">
            <div class="notes__small-title">${title}</div>
            <div class="notes__small-body">
            ${body.substring(0, MAX_BODY_LENGTH)}
            ${body.length > MAX_BODY_LENGTH ? "..." : ""}
            </div>
            <div class="notes__small-updated">
            ${new Date(updated).toLocaleString("en", {
              dateStyle: "full",
              timeStyle: "short",
            })}
            </div>
          </div>
    `;
  }

  updateNoteList(notes) {}
}
