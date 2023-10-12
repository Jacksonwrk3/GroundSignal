import React from "react";

const Button = (props) => {
  return (
    <button
      className={`bg-blue-500 h-10 px-5 rounded-sm text-white p-2 ${props.className}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
