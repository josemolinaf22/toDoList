import React, { useState } from "react";

const Modal = () => {
  const mode = "create";

  const editMode = mode === "edit" ? true : false;

  const [data, setData] = useState({
    user_email: "",
    title: "",
    progress: "",
    date: editMode ? "" : new Date(),
  });

  const handleChange = () => {
    console.log("changing");
  };
  return (
    <div className="overlay">
      <div className="modal">
        <div className="form-title-container">
          <h3>Let's {mode} your task </h3>
          <button>X</button>
        </div>
        <form action=" ">
          <input
            required
            maxLength={30}
            placeholder="Your task goes here"
            name="title"
            value={""}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="range"> Drag to selecty our current progress </label>
          <input
            id="range"
            type="range"
            min="0"
            max="100"
            name="progress"
            value={""}
            onChange={handleChange}
          />
          <input className={mode} type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Modal;
