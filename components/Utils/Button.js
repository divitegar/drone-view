import React from "react";

export default function Button({ text, className }) {
  return (
    <button className={`rounded-[39px] relative ${className}`}>
      <h2>{text}</h2>
    </button>
  );
}
