import React from "react";

const Toolbar = ({ setTool }) => {
  return (
    <div className="toolbar">
      <button onClick={() => setTool("pencil")}>Pencil</button>
      <button onClick={() => setTool("eraser")}>Eraser</button>
    </div>
  );
};

export default Toolbar;
