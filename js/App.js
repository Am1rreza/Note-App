import NotesAPI from "./NotesAPI.js";
import NotesView from "./NotesView.js";

export default class App {
  constructor(root) {
    this.notes = [];
    this.activeNote = null;
    this.view = new NotesView(root, this.#handlers);
  }

  #handlers() {
    return {
      onNoteAdd: () => {
        console.log("note added");
      },

      onNoteEdit: (newTitle, newBody) => {
        console.log(newTitle, newBody);
      },

      onNoteSelect: (noteId) => {
        console.log(noteId);
      },

      onNoteDelete: (noteId) => {
        console.log(noteId);
      },
    };
  }
}
