import React from "react";
import Student from "./components/student";

const Todo = () => {
  const students = [
    { name: "Kajal" },
    { name: "Shreepad" },
    { name: "Mayuri" },
    { name: "Shruti" },
  ];
  return (
    <>
      <h2>My Todo App</h2>
      <h4>Student List</h4>
      <div className="studentList">
        {
          students.map((student) => <Student stud={student} isLiked={false} />)
        }
      </div>
    </>
  );
};
export default Todo;
