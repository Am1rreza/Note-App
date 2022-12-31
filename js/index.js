import NotesAPI from "./NotesAPI.js";
import NotesView from "./NotesView.js";
const app = document.getElementById("app");

const view = new NotesView(app, {
  onNoteAdd() {
    console.log("note added");
  },

  onNoteEdit(newTitle,newBody){
    console.log(newTitle,newBody);
  }
});
