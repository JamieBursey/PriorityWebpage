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
  const updateClaimed = (index) => {
    const newRows = [...row];
    newRows[index].claimed = !newRows[index].claimed;
    setRow(newRows);
  };
  return (
    <>
      <button onClick={addRow} className="btn btn-primary mt-2 mb-2">
        Add Row
      </button>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Therapist</th>
            <th scope="col">Date</th>
            <th scope="col">Value</th>
            <th scope="col">Card Number</th>
            <th scope="col">Claimed</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {row.map((row, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Purchaser Name"
                  value={row.name}
                  onChange={(e) => updateRow(index, "name", e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Therapist"
                  value={row.therapist}
                  onChange={(e) =>
                    updateRow(index, "therapist", e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="date"
                  className="form-control"
                  value={row.date}
                  onChange={(e) => updateRow(index, "date", e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Value"
                  value={row.value}
                  onChange={(e) => updateRow(index, "value", e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Number"
                  value={row.cardNumber}
                  onChange={(e) =>
                    updateRow(index, "cardNumber", e.target.value)
                  }
                />
              </td>
              <td>
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id={`claimedSwitch${index}`}
                    checked={row.claimed}
                    onChange={() => updateClaimed(index)}
                  />
                  <label
                    className="form-check-label"
                    htmlFor={`claimedSwitch${index}`}
                  ></label>
                </div>
              </td>
              <td>
                <button
                  onClick={() => deleteRow(index)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export { GiftCardTable };
