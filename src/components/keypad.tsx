import { useState } from "react";

const Keypad = () => {
  const [display, setDisplay] = useState<string | number>("");

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "C", "+", "-", "=", ""];

  const handleclick = (value) => {
    if (value === "=") {
      setDisplay(eval(display));
    } else {
      setDisplay(display + value);
    }
    if (value === "C") {
      setDisplay("");
    }
  };

  return (
    <>
      <div className="calculator">
        <div className="grid">
          {numbers.map((value) => (
            <button
              className="grid__item"
              onClick={() => {
                handleclick(value);
              }}
              key={value}
            >
              {value}
            </button>
          ))}
        </div>

        <div className="display">Rezultat:{display}</div>
      </div>
    </>
  );
};

export default Keypad;
