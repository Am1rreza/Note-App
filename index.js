const notes = [
  {
    id: 1,
    title: "New Note",
    body: "This is my first note",
    updated: "2022-12-30T17:33:17.581Z",
  },
  {
    id: 2,
    title: "New Note",
    body: "This is my second note",
    updated: "2022-12-30T17:33:32.950Z",
  },
  {
    id: 3,
    title: "New Note",
    body: "This is my third note",
    updated: "2022-12-30T17:45:18.817Z",
  },
];

class NotesAPI {
  static getAllNotes() {
    const savedNotes = JSON.parse(localStorage.getItem("notes-app")) || [];
    return savedNotes.sort((a, b) => {
      return new Date(a.updated) > new Date(b.updated) ? -1 : 1;
    });
  }

  static saveNote(noteToSave) {
    const notes = NotesAPI.getAllNotes();
    const existedNote = notes.find((n) => n.id == noteToSave.id);

    if (existedNote) {
      // update the note updated
      existedNote.updated = new Date().toISOString();
      // update the title and body
      existedNote.title = noteToSave.title;
      existedNote.body = noteToSave.body;
    } else {
      noteToSave.id = new Date().getTime();
      noteToSave.updated = new Date().toISOString();
      // new note !
      notes.push(noteToSave);
    }

    // save to storage
    localStorage.setItem("notes-app", JSON.stringify(notes));
  }

  static deleteNote(id) {
    const notes = NotesAPI.getAllNotes();
    const filteredNotes = notes.filter((n) => n.id != id);
    localStorage.setItem("notes-app", JSON.stringify(filteredNotes));
  }
}