import React, { useState } from "react";

const ToDoList = (props) => {
  return (
    <>
      <div className="todo">
        <span>
            {props.text}
        </span>
        <button onClick={() => {props.onSelect(props.id)}}><i className="fas fa-trash-alt"></i></button>
      </div>
    </>
   
  );
}

export default ToDoList;