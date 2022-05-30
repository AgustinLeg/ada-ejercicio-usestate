import React, { useState } from "react";

const Box = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="box__container">
      <div className="box__header">
        <p>{item.title}</p>
        <button onClick={() => setIsOpen(!isOpen)}>
          {" "}
          <i class="fa-solid fa-chevron-down"></i>
        </button>
      </div>
      {isOpen && (
        <div className="box__content">
          <p>{item.content}</p>
        </div>
      )}
    </div>
  );
};

export default Box;
