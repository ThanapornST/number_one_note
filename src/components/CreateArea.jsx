import React from "react";

function CreateArea(props) {
  const [note, setNote] = React.useState({
    title: props.editingNote?.title || "",
    content: props.editingNote?.content || ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => ({
      ...prevNote,
      [name]: value
    }));
  }

  function submitNote(event) {
    event.preventDefault();
    if (props.editingNote) {
      // กำลังแก้ไขโน้ต
      props.onUpdate({ ...note, id: props.editingNote.id });
    } else {
      // เพิ่มโน้ตใหม่
      props.onAdd(note);
    }
    setNote({ title: "", content: "" }); // ล้างช่องกรอก
  }

  return (
    <div>
      <form>
        <input
          name="title"
          value={note.title}
          onChange={handleChange}
          placeholder="Title"
        />
        <textarea
          name="content"
          value={note.content}
          onChange={handleChange}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitNote}>
          {props.editingNote ? "Update" : "Add"}
        </button>
      </form>
    </div>
  );
}

export default CreateArea;


/*ในฟังก์ชัน CreateArea มีการสร้าง state note และ setNote 
โดย note จะเก็บ object 2 ค่า title และ content ส่วน setNote 
ใช้อัปเดตข้อมูลที่ผู้ใช้พิมพ์ใหม่ ในฟังก์ชันมี handleChange ที่ดึง name และ value 
ของ input/textarea แล้วอัปเดตเฉพาะ field ที่แก้ไข โดยใช้ ...prevNote 
คัดลอกค่าทั้งหมด และ [name]: value เพื่อเปลี่ยนเฉพาะช่องที่พิมพ์ ที่ return 
จะมีฟอร์มที่มี <input> สำหรับหัวข้อ <textarea> สำหรับเนื้อหา และปุ่ม Add ไว้กดเพื่อส่งข้อมูล */
