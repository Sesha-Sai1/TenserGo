import React from "react";

const EmailHistory = ({ emails }) => {
  return (
    <div>
      <h3>Email History</h3>
      <ul>
        {emails.length > 0 ? (
          emails.map((email, index) => (
            <li
              key={index}
              style={{
                listStyle: "none",
                border: "1px solid green",
                width: "300px",
              }}
            >
              <p>To: {email.to}</p>
              <p>Subject: {email.subject}</p>
              <p>Msg:{email.text}</p>
            </li>
          ))
        ) : (
          <h1>You don't any emails yet</h1>
        )}
      </ul>
    </div>
  );
};

export default EmailHistory;
