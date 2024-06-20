// src/components/Dashboard.js
import React, { useState, useEffect } from "react";
import { getEmails, sendEmail } from "../Api";
import EmailHistory from "./EmailHistory";
import ComposeEmail from "./ComposeEmail";

const Dashboard = () => {
  const [emails, setEmails] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEmails = async () => {
      try {
        const emailHistory = await getEmails();
        setEmails(emailHistory);
      } catch (error) {
        if (error.message.includes("401")) {
          window.location.href = "http://localhost:5000/auth/google";
        } else {
          setError(error.message);
        }
      }
    };
    fetchEmails();
  }, []);

  const handleSendEmail = async (email) => {
    try {
      await sendEmail(email);
      setEmails([...emails, email]);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <center>
        <h2>Dashboard</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <ComposeEmail onSendEmail={handleSendEmail} />
        <EmailHistory emails={emails} />
      </center>
    </div>
  );
};

export default Dashboard;
