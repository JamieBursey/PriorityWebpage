import { useState, useEffect } from "react";
import { LOCALSTORAGE } from "../config.js";

const GiftCardTable = () => {
  const therapists = ["Kelly", "Danyelle", "Emily", "Courtney"];
  const giftValues = [75, 85, 105, 160];
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
                <select
                  className="form-select"
                  value={row.therapist}
                  onChange={(e) =>
                    updateRow(index, "therapist", e.target.value)
                  }
                >
                  <option value="">Select Therapist</option>
                  {therapists.map((therapist, index) => (
                    <option key={index} value={therapist}>
                      {therapist}
                    </option>
                  ))}
                </select>
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
                <select
                  className="form-select"
                  value={row.value}
                  onChange={(e) => updateRow(index, "value", e.target.value)}
                >
                  {giftValues.map((price, index) => (
                    <option key={index} value={price}>
                      ${price}
                    </option>
                  ))}
                </select>
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

const FaceBookMessages = () => {
  useEffect(() => {
    // Load the Facebook SDK script
    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");

    // Initialize the Facebook SDK and Chat plugin
    window.fbAsyncInit = function () {
      window.FB.init({
        xfbml: true,
        version: "v19.0",
      });

      // Set attributes for the chatbox when FB is initialized
      const chatbox = document.getElementById("fb-customer-chat");
      if (chatbox) {
        chatbox.setAttribute("page_id", "102092832047492");
        chatbox.setAttribute("attribution", "biz_inbox");
      }
    };
  }, []);

  return (
    <>
      <div id="fb-root"></div>
      <div id="fb-customer-chat" className="fb-customerchat"></div>
    </>
  );
};
const MessengerLink = () => {
  return (
    <a
      href="https://m.me/102092832047492"
      target="_blank"
      rel="noopener noreferrer"
    >
      Message Us
    </a>
  );
};

export { GiftCardTable, FaceBookMessages, MessengerLink };
