import { useState, useEffect } from "react";
import app from "../firebaseConfig";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

const db = getFirestore();

const GiftCardTable = () => {
  const therapists = ["Kelly", "Danyelle", "Emily", "Courtney"];
  const giftValues = [75, 85, 105, 160];
  const [rows, setRows] = useState([]);

  // Load initial data from Firestore
  useEffect(() => {
    const loadRows = async () => {
      const querySnapshot = await getDocs(collection(db, "giftCards"));
      const loadedRows = [];
      querySnapshot.forEach((doc) => {
        loadedRows.push({ id: doc.id, ...doc.data() });
      });
      setRows(loadedRows);
    };

    loadRows();
  }, []);

  // Add a new row to Firestore
  const addRowToFirestore = async () => {
    const newRow = {
      name: "",
      therapist: "",
      date: "",
      value: "",
      cardNumber: "",
      claimed: false,
    };
    const docRef = await addDoc(collection(db, "giftCards"), newRow);
    setRows([...rows, { ...newRow, id: docRef.id }]);
  };

  // Update a row in Firestore
  const updateRowInFirestore = async (index, field, value) => {
    const updatedRows = [...rows];
    const row = updatedRows[index];
    row[field] = value;
    setRows(updatedRows);

    const rowRef = doc(db, "giftCards", row.id);
    await updateDoc(rowRef, { [field]: value });
  };

  // Delete a row from Firestore
  const deleteRowFromFirestore = async (index) => {
    const row = rows[index];
    const newRows = rows.filter((_, idx) => idx !== index);
    setRows(newRows);

    const rowRef = doc(db, "giftCards", row.id);
    await deleteDoc(rowRef);
  };

  // Toggle claimed status in Firestore
  const updateClaimed = async (index) => {
    const updatedRows = [...rows];
    updatedRows[index].claimed = !updatedRows[index].claimed;
    setRows(updatedRows);

    const rowRef = doc(db, "giftCards", updatedRows[index].id);
    await updateDoc(rowRef, { claimed: updatedRows[index].claimed });
  };
  return (
    <>
      <button onClick={addRowToFirestore} className="btn btn-primary mt-2 mb-2">
        Add Row
      </button>

      <div className="d-none d-md-block table-responsive">
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
            {rows.map((row, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Purchaser Name"
                    value={row.name}
                    onChange={(e) =>
                      updateRowInFirestore(index, "name", e.target.value)
                    }
                  />
                </td>
                <td>
                  <select
                    className="form-select"
                    value={row.therapist}
                    onChange={(e) =>
                      updateRowInFirestore(index, "therapist", e.target.value)
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
                    onChange={(e) =>
                      updateRowInFirestore(index, "date", e.target.value)
                    }
                  />
                </td>
                <td>
                  <select
                    className="form-select"
                    value={row.value}
                    onChange={(e) =>
                      updateRowInFirestore(index, "value", e.target.value)
                    }
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
                      updateRowInFirestore(index, "cardNumber", e.target.value)
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
                    onClick={() => deleteRowFromFirestore(index)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="d-block d-md-none">
        {" "}
        //layout for mobile to be cards
        {rows.map((row, index) => (
          <div className="container mb-3" key={index}>
            <div className="card-body mobile-gift-card p-2">
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={row.name}
                  onChange={(e) =>
                    updateRowInFirestore(index, "name", e.target.value)
                  }
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Therapist</label>
                <select
                  className="form-select"
                  value={row.therapist}
                  onChange={(e) =>
                    updateRowInFirestore(index, "therapist", e.target.value)
                  }
                >
                  <option value="">Select Therapist</option>
                  {therapists.map((therapist, idx) => (
                    <option key={idx} value={therapist}>
                      {therapist}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label">Date</label>
                <input
                  type="date"
                  className="form-control"
                  value={row.date}
                  onChange={(e) =>
                    updateRowInFirestore(index, "date", e.target.value)
                  }
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Value</label>
                <select
                  className="form-select"
                  value={row.value}
                  onChange={(e) =>
                    updateRowInFirestore(index, "value", e.target.value)
                  }
                >
                  {giftValues.map((price, idx) => (
                    <option key={idx} value={price}>
                      ${price}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label">Card Number</label>
                <input
                  type="text"
                  className="form-control"
                  value={row.cardNumber}
                  onChange={(e) =>
                    updateRowInFirestore(index, "cardNumber", e.target.value)
                  }
                />
              </div>

              <div className="mb-3">
                <p>Claimed</p>
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
                  >
                    Claimed
                  </label>
                </div>
              </div>

              <button
                onClick={() => deleteRowFromFirestore(index)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

const FaceBookMessages = () => {
  useEffect(() => {
    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");

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
