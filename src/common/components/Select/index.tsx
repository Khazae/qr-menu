import React, { useState } from "react";
import styles from "./styles.module.css";

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  options: Option[];
  onChange: (selectedValue: string) => void;
}

const CustomSelect: React.FC<CustomSelectProps> = ({ options, onChange }) => {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    onChange(selectedValue);
  };

  return (
    <div className={styles["custom-select"]}>
      <select value={selectedOption} onChange={handleSelectChange}>
        <option value="">Выберите опцию</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CustomSelect;
