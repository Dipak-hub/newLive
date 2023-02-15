import React, { useState } from "react";
import { useHMSActions } from "@100mslive/react-sdk";
import "../App.css";
import GetToken from "../utils/getToken";

export default function JoinRoom() {
  const hmsActions = useHMSActions();

  const [name, setName] = useState("");
  const [role, setRole] = useState("stage");

  const handleSelectChange = (e) => {
    setRole(e.target.value);
  };
  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = () => {
    GetToken(role)
      .then((token) => {
        console.log(token);
        return hmsActions.join({
          userName: name,
          authToken: token,
        });
      })
      .catch((err) => console.log("token error", err));
  };

  return (
    <div className="app">
      <div className="login">
        <h2>Join Meeting Room</h2>

        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={handleInputChange}
          name="name"
          required
        />

        <select onChange={handleSelectChange}>
          <option value="stage">Stage</option>
          <option value="viewer">Viewer</option>
        </select>

        <button type="submit" onClick={handleSubmit}>
          {" "}
          Join
        </button>
      </div>
    </div>
  );
}
