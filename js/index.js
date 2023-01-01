import NotesAPI from "./NotesAPI.js";
import NotesView from "./NotesView.js";
import App from "./App.js";
const root = document.getElementById("app");
const app = new App();

const view = new NotesView(app, {
  onNoteAdd() {
    console.log("note added");
  },

  onNoteEdit(newTitle, newBody) {
    console.log(newTitle, newBody);
  },

  onNoteSelect(noteId) {
    console.log(noteId);
  },

  onNoteDelete(noteId) {
    console.log(noteId);
  },
});
