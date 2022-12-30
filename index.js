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
    const savedNotes = notes || [];
    return savedNotes.sort((a, b) => {
      return new Date(a.updated) > new Date(b.updated) ? -1 : 1;
    });
  }

  static saveNote() {}

  deleteNote() {}
}
