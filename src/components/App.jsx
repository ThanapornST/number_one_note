import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);
  const [editingNote, setEditingNote] = useState(null);
  

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  function updateNote(updatedNote) {
    setNotes((prevNotes) =>
      prevNotes.map((note, index) =>
        index === updatedNote.id
          ? { title: updatedNote.title, content: updatedNote.content }
          : note
      )
    );
    setEditingNote(null);
  }

  return (
    <div>
      <Header />
      <CreateArea
        onAdd={addNote}
        onUpdate={updateNote}
        editingNote={editingNote}
      />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
            onEdit={() => setEditingNote({ id: index, ...noteItem })}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
