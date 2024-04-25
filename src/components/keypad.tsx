import { useState } from "react";

const Keypad = () => {
  const [display, setDisplay] = useState<string>("");

  const numbers: (number | string)[] = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    0,
    "+",
    "-",
    "/",
    "*",
    "=",
    ".",
    "AC",
    "DE",
  ];

  const handleclick = (value: number | string) => {
    if (value === "=") {
      setDisplay("Rezultat: " + eval(display as string));
    } else {
      setDisplay(display + value);
    }
    if (value === "AC") {
      setDisplay("");
    }
    if (value === "DE") {
      setDisplay(display.slice(0, -1));
    }
  };

  return (
    <>
      <div className="calculator">
        <div className="calculator__display">{display}</div>
        <div className="calculator__grid">
          {numbers.map((value) => (
            <button
              onClick={() => {
                handleclick(value);
              }}
              key={value.toString()}
            >
              {value}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Keypad;
