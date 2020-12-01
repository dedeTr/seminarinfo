import React from "react";

const Button = ({ isLoading, title, onClick }) => {
  if (isLoading) {
    return (
      <button className="btn disabled" onClick={onClick}>
        Loading ...
      </button>
    );
  }
  return (
    <button className="btn" onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
