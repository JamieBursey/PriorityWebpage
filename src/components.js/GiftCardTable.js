import { useState, useEffect } from "react";
import { LOCALSTORAGE } from "../config.js";

const GiftCardTable = () => {
  const [row, setRow] = useState(() => {
    const savedRows = localStorage.getItem(LOCALSTORAGE.SAVEDROW);
    return savedRows ? JSON.parse(savedRows) : [];
  });

  useEffect(() => {
    localStorage.setItem(LOCALSTORAGE.SAVEDROW, JSON.stringify(row));
  }, [row]);

  const addRow = () => {
    const newRow = {
      id: row.length + 1,
      name: "",
      therapist: "",
      date: "",
      value: "",
      cardNumber: "",
      date: "",
      claimed: "",
      Delete: "",
    };
    setRow([...row, newRow]);
  };

  const updateRow = (index, field, value) => {
    const newRows = [...row];
    newRows[index][field] = value;
    setRow(newRows);
  };

  const deleteRow = (index) => {
    const newRows = row.filter((rows, rowIndex) => rowIndex !== index);
    setRow(newRows);
  };
};

export { GiftCardTable };
