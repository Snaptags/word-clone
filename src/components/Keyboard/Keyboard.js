import React from "react";

const keys = [
  ["Q", "W", "E", "R", "T", "Z", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Y", "X", "C", "V", "B", "N", "M"],
];

function Keyboard({ usedKeys }) {
  console.log({ usedKeys });
  return keys.map((row, index) => (
    <div className="keys" key={index}>
      {row.map((key) => (
        <span className={`key ${usedKeys?.[key]}`} key={key}>
          {key}
        </span>
      ))}
    </div>
  ));
}

export default Keyboard;
