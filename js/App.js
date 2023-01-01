import NotesAPI from "./NotesAPI.js";
import NotesView from "./NotesView.js";

export default class App {
  constructor(root) {
    this.notes = [];
    this.activeNote = null;
    this.view = new NotesView(root, this.handlers());

    this.#refreshNotes();
  }

  #refreshNotes() {
    const notes = NotesAPI.getAllNotes();
    this.notes = notes;

    // set Notes
    this.view.updateNoteList(this.notes);
    this.view.updateNotePreviewVisibility(this.notes.length > 0);

    // set active note
    this.activeNote = this.notes[0];
    this.view.updateActiveNote(this.activeNote);
  }

  handlers() {
    return {
      onNoteAdd: () => {
        const newNote = {
          title: "New Note",
          body: "Take some note",
        };

        NotesAPI.saveNote(newNote);
        this.#refreshNotes();
      },

      onNoteEdit: (newTitle, newBody) => {
        console.log(newTitle, newBody);
      },

      onNoteSelect: (noteId) => {
        const selectedNote = this.notes.find((n) => n.id == noteId);
        this.activeNote = selectedNote;
        this.view.updateActiveNote(this.activeNote);
      },

      onNoteDelete: (noteId) => {
        console.log(noteId);
      },
    };
  }
}
