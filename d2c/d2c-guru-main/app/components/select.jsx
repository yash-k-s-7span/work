import { useState } from "react";
import { DownArrow } from "./icons/down-arrow";

const Select = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelect = (option) => {
    setSelectedOption(option.label);
    onSelect(option.value);
    setIsOpen(false);
  };

  return (
    <div className="relative z-10">
      <button
        className="w-full flex justify-between gap-2 border border-primary-500 p-2 font-semibold text-primary-500 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption || "Sort By"}
        <DownArrow />
      </button>
      {isOpen && (
        <div className="absolute w-full bg-white border border-primary-500 mt-1">
          {options.map((option) => (
            <div
              key={option.value}
              className="p-2 cursor-pointer hover:bg-primary-500 hover:text-white"
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
