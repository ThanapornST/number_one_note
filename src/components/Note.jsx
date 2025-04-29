import React from "react";

function Note(props) {

  function handleClick(newNote) {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <p>{props.category}</p>
      <button onClick={handleClick}>🗑️</button>
      <button onClick={props.onEdit}>✏️</button>

    </div>
  );
}

export default Note;
