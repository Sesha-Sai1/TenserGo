import React, { useState } from "react";
import { getEmails } from "../Api";

const ComposeEmail = ({ onSendEmail }) => {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSendEmail({ to, subject, text });
    setTo("");
    setSubject("");
    setText("");
    getEmails();
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <div>
          <input
            type="email"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            placeholder="To"
            required
            size={30}
          />
        </div>
        <div>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Subject"
            required
            size={30}
          />
        </div>
        <div>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Message"
            required
            rows={10}
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            onClick={handleSubmit}
            style={{ fontSize: "18px", padding: "10px" }}
          >
            Send Email
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComposeEmail;
